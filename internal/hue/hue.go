package hue

import (
	"athena/internal/todo"
	"fmt"
	"strconv"
	"strings"

	"github.com/pterm/pterm"
	"github.com/pterm/pterm/putils"
)

var zoneMap = map[string]string{
	"u": "urgent",
	"s": "significant",
	"n": "not_urgent",
	"i": "insignificant",
	"h": "habit",
}

type Zone struct {
	Name        string
	Description string
	Alias       string
}

var Zones = []Zone{
	{Name: "urgent", Description: "Important & Urgent - crises, emergencies", Alias: "u"},
	{Name: "significant", Description: "Important & Not Urgent - goals, planning", Alias: "s"},
	{Name: "not_urgent", Description: "Not Important & Urgent - interruptions", Alias: "n"},
	{Name: "insignificant", Description: "Not Important & Not Urgent - time wasters", Alias: "i"},
	{Name: "habit", Description: "Recurring tasks and habits", Alias: "h"},
}

func normalizeZone(z string) string {
	if full, exists := zoneMap[z]; exists {
		return full
	}
	return z
}

func isValidZone(z string) bool {
	norm := normalizeZone(z)
	for _, zone := range Zones {
		if zone.Name == norm {
			return true
		}
	}
	return false
}

func Move(taskIdentifier string, zone string) error {
	id, err := strconv.Atoi(taskIdentifier)
	if err != nil {
		id, err = todo.ValidateTitle(taskIdentifier)
		if err != nil {
			return err
		}
	} else {
		if err := todo.ValidateID(id); err != nil {
			return err
		}
	}

	task, ok := todo.TodoMap[id]
	if !ok {
		return fmt.Errorf("could not find task with identifier: %s", taskIdentifier)
	}

	normalized := normalizeZone(zone)
	if !isValidZone(normalized) {
		return fmt.Errorf("invalid zone: %s", zone)
	}

	task.Hue = normalized
	todo.TodoMap[id] = task

	pterm.Success.Printf("Moved task '%s' to zone '%s' ✅\n", task.Title, normalized)
	return nil
}

func ListZones() {
	pterm.Println()
	pterm.DefaultHeader.WithFullWidth().
		WithBackgroundStyle(pterm.NewStyle(pterm.BgCyan)).
		WithTextStyle(pterm.NewStyle(pterm.Bold)).
		Printfln("Eisenhower Matrix Zones 🧠")

	zoneTasks := make(map[string][]todo.Todo)
	for _, z := range Zones {
		zoneTasks[z.Name] = []todo.Todo{}
	}
	for _, task := range todo.TodoMap {
		if isValidZone(task.Hue) {
			zoneTasks[task.Hue] = append(zoneTasks[task.Hue], task)
		}
	}

	var leveledList pterm.LeveledList
	for _, z := range Zones {
		zoneColor := zoneColorStyle(z.Alias)
		zoneTitle := zoneColor.Sprintf("%s %s", zoneIcon(z.Alias), strings.ToUpper(z.Name))
		zoneDesc := pterm.NewStyle(pterm.FgGray).Sprint(z.Description)
		leveledList = append(leveledList, pterm.LeveledListItem{Level: 0, Text: zoneTitle + " - " + zoneDesc})
		tasks := zoneTasks[z.Name]
		if len(tasks) == 0 {
			leveledList = append(leveledList, pterm.LeveledListItem{Level: 1, Text: pterm.NewStyle(pterm.FgGray, pterm.Italic).Sprint("(No tasks)")})
		} else {
			for _, t := range tasks {
				status := pterm.NewStyle(pterm.FgRed).Sprint("❌")
				if t.Status {
					status = pterm.NewStyle(pterm.FgGreen).Sprint("✅")
				}
				leveledList = append(leveledList, pterm.LeveledListItem{Level: 1, Text: pterm.Sprintf("[%d] %s %s", t.ID, t.Title, status)})
			}
		}
	}

	root := putils.TreeFromLeveledList(leveledList)
	root.Text = pterm.NewStyle(pterm.FgCyan, pterm.Bold).Sprint("Eisenhower Matrix")
	pterm.DefaultTree.WithRoot(root).Render()

	pterm.Println()
	pterm.Info.Println("Usage: hue [task_id_or_title] [zone_short/long-hand]")
	pterm.Info.Println("Example: hue 5 u  →  moves task 5 to Urgent zone")
}

func zoneIcon(alias string) string {
	switch alias {
	case "u":
		return "🔥"
	case "s":
		return "⭐"
	case "n":
		return "📋"
	case "i":
		return "🗑️"
	case "h":
		return "🔄"
	default:
		return ""
	}
}

func zoneColorStyle(alias string) *pterm.Style {
	switch alias {
	case "u":
		return pterm.NewStyle(pterm.FgRed, pterm.Bold)
	case "s":
		return pterm.NewStyle(pterm.FgYellow, pterm.Bold)
	case "n":
		return pterm.NewStyle(pterm.FgBlue, pterm.Bold)
	case "i":
		return pterm.NewStyle(pterm.FgGreen, pterm.Bold)
	case "h":
		return pterm.NewStyle(pterm.FgMagenta, pterm.Bold)
	default:
		return pterm.NewStyle(pterm.FgWhite, pterm.Bold)
	}
}
