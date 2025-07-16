package cmd

import (
	"athena/internal/todo"
	"strings"

	"github.com/spf13/cobra"
)

var todoCmd = &cobra.Command{
	Use:   "todo [command] [task]",
	Short: "\n💎 Manage your todo list",
	Run: func(cmd *cobra.Command, args []string) {
		todo.List()
	},
}

var addCmd = &cobra.Command{
	Use:     "add [task]",
	Short:   "Add a new task to your todo list",
	Aliases: []string{"a"},
	Args:    cobra.MinimumNArgs(1),
	Run: func(cmd *cobra.Command, args []string) {
		task := strings.Join(args, " ")
		todo.Add(task)
		todo.List()
	},
}

var listCmd = &cobra.Command{
	Use:     "list",
	Short:   "List all of your tasks",
	Aliases: []string{"l"},
	Run: func(cmd *cobra.Command, args []string) {
		todo.List()
	},
}

var deleteCmd = &cobra.Command{
	Use:     "delete [task ID or title]",
	Short:   "Delete a task from your todo list",
	Aliases: []string{"d"},
	Args:    cobra.MinimumNArgs(1),
	Run: func(cmd *cobra.Command, args []string) {
		todo.Delete(strings.Join(args, " "))
		todo.List()
	},
}

var toggleCmd = &cobra.Command{
	Use:     "toggle [task ID or title]",
	Short:   "Toggle the status of a task",
	Aliases: []string{"t"},
	Args:    cobra.MinimumNArgs(1),
	Run: func(cmd *cobra.Command, args []string) {
		todo.Toggle(strings.Join(args, " "))
		todo.List()
	},
}

func init() {
	rootCmd.AddCommand(todoCmd)
	todoCmd.AddCommand(addCmd, listCmd, deleteCmd, toggleCmd)
}