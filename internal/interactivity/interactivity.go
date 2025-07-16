package interactivity

import (
	"math/rand"
	"os"
	"time"

	"github.com/pterm/pterm"
)

func ShowBanner() {
	data, _ := os.ReadFile("banner.txt")

	if _, err := os.Stat("banner.txt"); err != nil {
		pterm.Warning.Println("banner.txt not found. Skipping banner.")
		return
	}
	pterm.Println()
	pterm.Print(string(data))
}

func HelloUser() {
	var username string

	emoji := []string{"☕️", "😶", "🤩", "👀", "💪", "🧠", "😴"}

	for {
		pterm.Println()
		result, _ := pterm.DefaultInteractiveTextInput.Show("Enter your username")
		// if username is not in the db :
		if result != "athena" {
			pterm.Println()
			pterm.Error.Println("No profile with this username is found")
		} else {
			username = result
			break
		}
	}
	for {
		pterm.Println()
		result, _ := pterm.DefaultInteractiveTextInput.WithMask("*").Show("Enter Your Password")
		// if wrong password :
		if result != "athena123" {
			pterm.Println()
			pterm.Error.Println("Wrong password, try again")
		} else {
			break
		}
	}

	pterm.Println()
	pterm.Success.Println("Logged-In Successfully!")
	pterm.Println()

	now := time.Now()
	hour := now.Hour()

	morningEmojis := emoji[0:6]
	afternoonEmojis := emoji[1:6]
	eveningEmojis := emoji[1:7]
	nightEmojis := emoji[1:7]

	var greeting string
	var selectedEmoji string

	switch {
	case hour >= 5 && hour < 12:
		greeting = "Good Morning"
		selectedEmoji = morningEmojis[rand.Intn(len(morningEmojis))]
	case hour >= 12 && hour < 17:
		greeting = "Good Afternoon"
		selectedEmoji = afternoonEmojis[rand.Intn(len(afternoonEmojis))]
	case hour >= 17 && hour < 21:
		greeting = "Good Evening"
		selectedEmoji = eveningEmojis[rand.Intn(len(eveningEmojis))]
	default:
		greeting = "Good Night"
		selectedEmoji = nightEmojis[rand.Intn(len(nightEmojis))]
	}
	pterm.DefaultHeader.WithBackgroundStyle(pterm.NewStyle(pterm.FgBlack, pterm.BgLightGreen)).Printf("%s, %s %s!", greeting, username, selectedEmoji)
}

func ShowMind() {
	pterm.Println()
	pterm.DefaultHeader.WithFullWidth().WithBackgroundStyle(
		pterm.NewStyle(pterm.FgWhite, pterm.BgLightRed, pterm.Bold),
	).Println("Mind Menu 🧩")
	pterm.Println()

	options := []pterm.BulletListItem{
		{Level: 0, Text: "todo        - Create, list, or check off your tasks.", TextStyle: pterm.NewStyle(pterm.FgLightWhite)},
		{Level: 0, Text: "hue         - Move a todo to Eisenhower matrix or habits section.", TextStyle: pterm.NewStyle(pterm.FgLightCyan)},
		{Level: 0, Text: "pomodoro    - Start a pomodoro focus timer.", TextStyle: pterm.NewStyle(pterm.FgLightYellow)},
		{Level: 0, Text: "tree        - Visualize your progress or time travel in Git-style.", TextStyle: pterm.NewStyle(pterm.FgLightGreen)},
		{Level: 0, Text: "exit        - Close your mind (aka exit).", TextStyle: pterm.NewStyle(pterm.FgRed)},
	}
	pterm.DefaultBulletList.WithItems(options).Render()
}


func WhatsNext() {
	messages := []string{
		"Ready to LOCK IN 🔥?",
		"What do you think about 🤔?",
		"You feelin' it or nah? 📈",
		"Hit me with your thoughts 🗣️",
		"What's the play? 🎮",
		"Straight up, what's good? 💯",
		"Lemme know the vibe 🤙",
	}

	pterm.Println()
	pterm.Info.Println(messages[rand.Intn(len(messages))])
	pterm.Println()
	pterm.Println(" ❯ Type `--mind` to explore your mind")
	pterm.Println(" ❯ OR check athenacli.com for full documentation!")

	// handling --help logic later:
	ShowMind()
}