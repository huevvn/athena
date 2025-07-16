package todo

import (
	"errors"
	"strings"

	"github.com/pterm/pterm"
)

func ValidateID(id int) error {
	if _, ok := TodoMap[id]; !ok {
		pterm.Println()
		pterm.Error.Printfln("Task with ID '%d' not found", id)
		return errors.New("task not found")
	}
	return nil
}

func ValidateTitle(title string) (int, error) {
	pterm.Println()
	for id, todo := range TodoMap {
		if strings.EqualFold(todo.Title, title) {
			return id, nil
		}
	}
	pterm.Error.Printfln("Task with title '%s' not found", title)
	return -1, errors.New("task not found")
}