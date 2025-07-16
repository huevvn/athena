package todo

import (
	"sort"
	"strconv"
	"strings"
	"time"

	"github.com/pterm/pterm"
)



type Todo struct {
	Title       string
	ID          int
	Hue         string
	Status      bool
	CreatedAt   time.Time
	CompletedAt *time.Time
}

var TodoMap = make(map[int]Todo)
var nextID = 0

// Add a task
func Add(title string) {
	// Prevent duplicate titles
	for _, todo := range TodoMap {
		if strings.EqualFold(todo.Title, title) {
			pterm.Println()
			pterm.Error.Println(pterm.NewStyle(pterm.FgRed, pterm.Bold).Sprintf("[Error] Task '%s' already exists.", title))
			pterm.Println()
			return
		}
	}

	id := nextID
	todo := Todo{
		Title:     title,
		ID:        id,
		Hue:       "insignificant", // Default
		Status:    false,
		CreatedAt: time.Now(),
	}
	TodoMap[id] = todo
	nextID++

	pterm.Println()
	pterm.Success.Println(pterm.NewStyle(pterm.FgGreen, pterm.Bold).Sprintf("[Success] Added '%s' to your list.", title))
}


// List tasks
func List() {
	if len(TodoMap) == 0 {
		pterm.Println()
		pterm.Info.Println(pterm.NewStyle(pterm.FgYellow, pterm.Bold).Sprint("[Info] No tasks found."))
		return
	}

	pterm.Println()
	pterm.DefaultHeader.WithFullWidth().
		WithBackgroundStyle(pterm.NewStyle(pterm.BgLightGreen)).
		WithTextStyle(pterm.NewStyle(pterm.FgWhite, pterm.Bold)).
		Printfln("Your Todos 📝")
	pterm.Println()

	tableData := pterm.TableData{
		{"ID", "Title", "Status", "Zone", "Created", "Completed"},
	}

	var ids []int
	for id := range TodoMap {
		ids = append(ids, id)
	}

	// Sort by ID for consistent display
	sort.Ints(ids)

	for _, id := range ids {
		todo := TodoMap[id]
		status := pterm.NewStyle(pterm.FgRed).Sprint("❌")
		if todo.Status {
			status = pterm.NewStyle(pterm.FgGreen).Sprint("✅")
		}
		zone := zoneEmoji(todo.Hue)
		created := todo.CreatedAt.Format("Jan 02 15:04")
		completed := ""
		if todo.CompletedAt != nil {
			completed = todo.CompletedAt.Format("Jan 02 15:04")
		}
		row := []string{
			pterm.NewStyle(pterm.FgLightCyan, pterm.Bold).Sprint(strconv.Itoa(todo.ID)),
			pterm.NewStyle(pterm.FgLightWhite).Sprint(todo.Title),
			status,
			zone,
			pterm.NewStyle(pterm.FgGray).Sprint(created),
			pterm.NewStyle(pterm.FgLightMagenta).Sprint(completed),
		}
		tableData = append(tableData, row)
	}

	pterm.DefaultTable.WithHasHeader().WithRowSeparator("-").WithHeaderRowSeparator("-").WithData(tableData).Render()
	pterm.Println()
	pterm.Info.Println(pterm.NewStyle(pterm.FgCyan, pterm.Bold).Sprint("[Tip] Use 'todo t <id>' to toggle, 'todo d <id>' to delete, or 'hue <id> <zone>' to assign a zone."))
}

func zoneEmoji(hue string) string {
	switch hue {
	case "urgent":
		return "🔥 urgent"
	case "significant":
		return "⭐ significant"
	case "not_urgent":
		return "📋 not_urgent"
	case "insignificant":
		return "🗑️ insignificant"
	case "habit":
		return "🔄 habit"
	default:
		return ""
	}
}

// Smart Delete
func Delete(input string) error {
	if id, err := strconv.Atoi(input); err == nil {
		return deleteByID(id)
	}
	return deleteByTitle(input)
}

// Smart Toggle
func Toggle(input string) error {
	if id, err := strconv.Atoi(input); err == nil {
		return toggleByID(id)
	}
	return toggleByTitle(input)
}

func deleteByID(id int) error {
	if err := ValidateID(id); err != nil {
		pterm.Error.Println(pterm.NewStyle(pterm.FgRed, pterm.Bold).Sprintf("[Error] %s", err.Error()))
		return err
	}
	if id == nextID-1 {
		nextID--
	}
	delete(TodoMap, id)
	pterm.Println()
	pterm.Success.Println(pterm.NewStyle(pterm.FgGreen, pterm.Bold).Sprintf("[Success] Task with ID '%d' deleted.", id))
	return nil
}

func deleteByTitle(title string) error {
	id, err := ValidateTitle(title)
	if err != nil {
		pterm.Error.Println(pterm.NewStyle(pterm.FgRed, pterm.Bold).Sprintf("[Error] %s", err.Error()))
		return err
	}
	return deleteByID(id)
}

func toggleByID(id int) error {
	if err := ValidateID(id); err != nil {
		pterm.Error.Println(pterm.NewStyle(pterm.FgRed, pterm.Bold).Sprintf("[Error] %s", err.Error()))
		return err
	}
	todo := TodoMap[id]
	todo.Status = !todo.Status
	if todo.Status {
		now := time.Now()
		todo.CompletedAt = &now
	} else {
		todo.CompletedAt = nil
	}
	TodoMap[id] = todo
	pterm.Println()
	pterm.Success.Println(pterm.NewStyle(pterm.FgGreen, pterm.Bold).Sprintf("[Success] Task with ID '%d' updated.", id))
	return nil
}

func toggleByTitle(title string) error {
	id, err := ValidateTitle(title)
	if err != nil {
		pterm.Error.Println(pterm.NewStyle(pterm.FgRed, pterm.Bold).Sprintf("[Error] %s", err.Error()))
		return err
	}
	return toggleByID(id)
}


