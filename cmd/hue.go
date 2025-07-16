package cmd

import (
	"athena/internal/hue"

	"github.com/pterm/pterm"
	"github.com/spf13/cobra"
)

var hueCmd = &cobra.Command{
	Use:   "hue",
	Short: "💎 Manage tasks in the Eisenhower Matrix",
	Long: `Assign tasks to Eisenhower Matrix zones.
Calling 'hue' with no subcommand will display the matrix.

- 🔥 u → urgent
- ⭐ s → significant
- 📋 n → not_urgent
- 🗑️ i → insignificant
- 🔄 h → habit`,
	   Args: cobra.MaximumNArgs(2),
	   DisableFlagParsing: true,
	Run: func(cmd *cobra.Command, args []string) {
		if len(args) == 2 {
			if err := hue.Move(args[0], args[1]); err != nil {
				pterm.Error.Println(err)
				return
			}
			// After moving, show the updated matrix
			hue.ListZones()
			return
		}
		if len(args) == 0 {
			hue.ListZones()
			return
		}
		// If args are not 0 or 2, show help
		_ = cmd.Help()
	},
}


var hueListCmd = &cobra.Command{
	Use:     "list",
	Short:   "Display the Eisenhower Matrix with all tasks",
	Aliases: []string{"l"},
	Run: func(cmd *cobra.Command, args []string) {
		hue.ListZones()
	},
}

func init() {
	   rootCmd.AddCommand(hueCmd)
	   hueCmd.AddCommand(hueListCmd)
}
