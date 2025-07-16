package pomodoro

import (
	"fmt"
	"math/rand"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/pterm/pterm"
	"github.com/pterm/pterm/putils"
)

var productivityQuotes = []string{
	"The key is not to prioritize what's on your schedule, but to schedule your priorities.",
	"The way to get started is to quit talking and begin doing your work.",
	"You don't have to see the whole staircase, just take the first step.",
	"It's not the load that breaks you down, it's the way you carry it.",
	"The secret of getting ahead is getting started on your work now.",
	"Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
	"Your mind is for having ideas, not for holding them for too long.",
	"The shorter way to do many things is to do only one thing at a time.",
	"Concentrate all your thoughts upon the work at hand to get results.",
	"The successful warrior is the average man, with laser-like focus.",
	"To produce a mighty book, you must choose a mighty theme to write.",
	"What you stay focused on will grow and become more successful.",
	"Focus on being productive instead of busy, it is more important.",
	"My success is that I have focused in on a few things that matter.",
	"You can't depend on your eyes when your imagination is out of focus.",
	"Instead of focusing on the competition, you should focus on the customer.",
	"I don't focus on what I'm up against. I focus on my goals instead.",
}

// StartPomodoro now takes arguments for work, rest, and rounds
func StartPomodoro(workTime, restTime, rounds int) {
	if workTime <= 0 || restTime < 0 || rounds <= 0 {
		pterm.Error.Println(pterm.NewStyle(pterm.FgRed, pterm.Bold).Sprint("[Error] Usage: pomodoro <work_minutes> <rest_minutes> <rounds> (all must be positive integers, rest can be zero)"))
		return
	}
	   sigs := make(chan os.Signal, 1)
	   signal.Notify(sigs, os.Interrupt, syscall.SIGTERM)
	   interrupted := false

	   for i := 0; i < rounds; i++ {
			   if runSessionInterruptible("Work", time.Duration(workTime)*time.Minute, i+1, rounds, sigs) {
					   interrupted = true
					   break
			   }
			   if i < rounds-1 && restTime > 0 {
					   if runSessionInterruptible("Rest", time.Duration(restTime)*time.Minute, i+1, rounds, sigs) {
							   interrupted = true
							   break
					   }
			   }
	   }

	   if interrupted {
			   pterm.Warning.Println("\nPomodoro interrupted!")
	   } else {
			   printCongrats()
	   }
}

// Like runSession, but returns true if interrupted
func runSessionInterruptible(sessionType string, duration time.Duration, currentRound, totalRounds int, sigs chan os.Signal) bool {
	   pterm.DefaultSection.Printf("Round %d/%d: %s Session\n", currentRound, totalRounds, sessionType)

	   area, _ := pterm.DefaultArea.Start()
	   defer area.Stop()

	   currentQuote := productivityQuotes[rand.Intn(len(productivityQuotes))]
	   nextQuoteTime := time.Now().Add(time.Minute)

	   for remaining := duration; remaining >= 0; remaining -= time.Second {
			   select {
			   case <-sigs:
					   return true
			   default:
			   }

			   if time.Now().After(nextQuoteTime) {
					   currentQuote = productivityQuotes[rand.Intn(len(productivityQuotes))]
					   nextQuoteTime = time.Now().Add(time.Minute)
			   }

			   minutes := int(remaining.Minutes())
			   seconds := int(remaining.Seconds()) % 60
			   timeStr := fmt.Sprintf("%02d:%02d", minutes, seconds)

			   bigTime, _ := pterm.DefaultBigText.WithLetters(putils.LettersFromString(timeStr)).Srender()
			   area.Update(pterm.DefaultCenter.Sprintln(bigTime) + "\n" + pterm.DefaultCenter.Sprintln(pterm.Info.Sprint(currentQuote)))

			   time.Sleep(time.Second)
	   }
	   return false
}


func printCongrats() {
	data, err := os.ReadFile("internal/pomodoro/congrats.txt")
	pterm.Println()
	pterm.Println()
	if err != nil {
		pterm.Warning.Println("congrats.txt not found. Showing default banner.")
		pterm.DefaultBigText.WithLetters(putils.LettersFromString("Congratulations!")).Render()
	} else {
		pterm.Print(string(data))
	}
	pterm.Println()
	pterm.Println()
	pterm.Success.Println("You have completed all Pomodoro rounds!")
}
