/*
Copyright © 2025 Ezzeldin Salah
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0
*/

package cmd

import (
	"athena/internal/interactivity"
	"os"
	"strings"

	"github.com/pterm/pterm"
	"github.com/spf13/cobra"
)

// rootCmd represents the base command when called without any subcommands
var rootCmd = &cobra.Command{
	Use:   "athena",
	Short: "Athena CLI: A second brain for terminal-native minds.",
	Long: `Tired of your brain being an unorganized mess?
    -> Athena CLI helps you wrangle your tasks, cultivate good habits, and manage your productivity,
    all from the comfort of your terminal. It's time to actually get stuff done.`,
	Run: func(cmd *cobra.Command, args []string) {
		startInteractiveSession()
	},
}

func startInteractiveSession() {
	interactivity.ShowBanner()
	interactivity.HelloUser()
	interactivity.WhatsNext()

	// We need a command to execute that doesn't have the interactive session as its run function
	// to avoid recursion.
	executeCmd := &cobra.Command{}
	executeCmd.AddCommand(todoCmd, exitCmd, pomodoroCmd, hueCmd)

	for {
		result, _ := pterm.DefaultInteractiveTextInput.Show("\nathena")
		if result == "" {
			continue
		}
		if result == "exit" || result == "close" {
			pterm.Println()
			pterm.Info.Println("👋 Goodbye!")
			break
		}

		args := strings.Fields(result)
		executeCmd.SetArgs(args)
		if err := executeCmd.Execute(); err != nil {
			pterm.Error.Println(err)
		}
	}
}

// Execute adds all child commands to the root command and sets flags appropriately.
// This is called by main.main(). It only needs to happen once to the rootCmd.
func Execute() {
	rootCmd.AddCommand(todoCmd, exitCmd, pomodoroCmd, hueCmd)
	if err := rootCmd.Execute(); err != nil {
		pterm.Println()
		pterm.Error.Println(err)
		os.Exit(1)
	}
}

func init() {
}

var exitCmd = &cobra.Command{
	Use:   "exit",
	Short: "Exit the application",
	Run: func(cmd *cobra.Command, args []string) {
		os.Exit(0)
	},
}