/************************************************************
 * SECTION 4: GAME FUNCTIONS
 *
 * Purpose:
 * Contains all functions that control the Prem Picker game.
 *
 * Functions included:
 *
 * renderTeams()
 *      Displays all remaining teams on the screen.
 *
 * eliminateTeam()
 *      Randomly selects and removes one team.
 *
 * animateSelection()
 *      Creates suspense by cycling through teams before
 *      selecting the eliminated club.
 *
 * checkWinner()
 *      Determines when only one team remains.
 *
 * displayWinner()
 *      Shows the final club reveal.
 *
 * resetGame()
 *      Returns the game to its original state.
 *
 ************************************************************/


/************************************************************
 * FUNCTION: renderTeams()
 *
 * Purpose:
 * Updates the team cards displayed on the page.
 *
 * Runs:
 * - When the game starts
 * - After every elimination
 * - When the game resets
 *
 ************************************************************/

function renderTeams() {

    // Clear existing team cards
    teamContainer.innerHTML = "";


    // Create a card for every remaining team
    remaining.forEach(team => {


        const card = document.createElement("div");


        // Add styling class
        card.classList.add("team");


        // Display team information
        card.innerHTML = `
            <h3>${team.name}</h3>
            <p>${team.nickname}</p>
        `;


        // Apply club colors
        card.style.background =
        `linear-gradient(
            135deg,
            ${team.color},
            ${team.secondary}
        )`;


        teamContainer.appendChild(card);

    });


    // Update team counter
    counter.innerHTML =
    `Teams Remaining: ${remaining.length}`;

}





/************************************************************
 * FUNCTION: eliminateTeam()
 *
 * Purpose:
 * Selects one random team and removes it.
 *
 * Logic:
 *
 * 1. Check if game is still running
 * 2. Pick a random team index
 * 3. Remove that team
 * 4. Add it to elimination history
 * 5. Update the screen
 * 6. Check for winner
 *
 ************************************************************/

function eliminateTeam() {


    // Stop if only one team remains
    if (remaining.length <= 1) {
        return;
    }


    // Select random team
    const randomIndex =
    Math.floor(Math.random() * remaining.length);


    // Store eliminated team
    const eliminatedTeam =
    remaining[randomIndex];


    // Remove team from active list
    remaining.splice(randomIndex, 1);


    // Add team to elimination history
    eliminated.push(eliminatedTeam);


    // Update elimination display
    eliminatedList.innerHTML +=
    `
    <li>
        ${eliminatedTeam.name}
        (${eliminatedTeam.nickname})
    </li>
    `;


    // Display elimination message
    message.innerHTML =
    `
    ❌ ${eliminatedTeam.name}
    has been eliminated!
    `;


    // Refresh team cards
    renderTeams();


    // Check if game is complete
    checkWinner();

}





/************************************************************
 * FUNCTION: checkWinner()
 *
 * Purpose:
 * Determines whether only one team remains.
 *
 * When one team is left:
 * - Hide elimination button
 * - Show winner
 * - Show reset option
 *
 ************************************************************/

function checkWinner() {


    if (remaining.length === 1) {


        const winner =
        remaining[0];


        displayWinner(winner);


        // Disable further eliminations
        eliminateButton.style.display =
        "none";


        // Show restart option
        resetButton.classList.remove("hidden");

    }

}





/************************************************************
 * FUNCTION: displayWinner()
 *
 * Purpose:
 * Creates the final winner announcement.
 *
 ************************************************************/

function displayWinner(team) {


    message.innerHTML =
    `
    <div class="winner">

        🏆<br>

        YOUR PREMIER LEAGUE CLUB IS

        <h1>${team.name}</h1>

        <h2>${team.nickname}</h2>

        <p>
        🏟 ${team.stadium}
        </p>

        <p>
        Founded: ${team.founded}
        </p>

        <p>
        League Titles: ${team.titles}
        </p>

    </div>
    `;

}





/************************************************************
 * FUNCTION: resetGame()
 *
 * Purpose:
 * Returns the app to its starting state.
 *
 * Used when:
 * User clicks "Pick Again"
 *
 ************************************************************/

function resetGame() {


    // Restore all teams
    remaining =
    [...teams];


    // Clear elimination history
    eliminated = [];


    // Clear messages
    message.innerHTML =
    "";


    // Clear eliminated list
    eliminatedList.innerHTML =
    "";


    // Show eliminate button again
    eliminateButton.style.display =
    "inline-block";


    // Hide reset button
    resetButton.classList.add("hidden");


    // Reload teams
    renderTeams();

}