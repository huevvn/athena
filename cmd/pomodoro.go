package cmd

import (
	"athena/internal/pomodoro"
	"strconv"

	"github.com/spf13/cobra"
)

var pomodoroCmd = &cobra.Command{
	Use:   "pomodoro [work_minutes] [rest_minutes] [rounds]\n",
	Short: "💎 Start a Pomodoro session",
		Args: cobra.MaximumNArgs(3),
	   DisableFlagParsing: true,
	   Run: func(cmd *cobra.Command, args []string) {
			   if len(args) == 0 {
					   _ = cmd.Help()
					   return
			   }
			   if len(args) != 3 {
					   cmd.PrintErrln("[Error] Usage: pomodoro [work_minutes] [rest_minutes] [rounds] (all must be positive integers)")
					   _ = cmd.Help()
					   return
			   }
			   work, err1 := strconv.Atoi(args[0])
			   rest, err2 := strconv.Atoi(args[1])
			   rounds, err3 := strconv.Atoi(args[2])
			   if err1 != nil || err2 != nil || err3 != nil || work <= 0 || rest <= 0 || rounds <= 0 {
					   cmd.PrintErrln("[Error] Usage: pomodoro [work_minutes] [rest_minutes] [rounds] (all must be positive integers)")
					   return
			   }
			   pomodoro.StartPomodoro(work, rest, rounds)
	   },
}

func init() {
	rootCmd.AddCommand(pomodoroCmd)
}
