/************************************************************
 * SECTION 3: UI ELEMENT REFERENCES
 *
 * Purpose:
 * Creates references between JavaScript and HTML elements.
 *
 * These variables allow the game logic to update:
 *
 * teamContainer:
 *      Displays all remaining Premier League team cards.
 *
 * counter:
 *      Shows how many teams remain.
 *
 * eliminatedList:
 *      Displays the order teams were eliminated.
 *
 * message:
 *      Displays elimination announcements and winner results.
 *
 * eliminateButton:
 *      The button that triggers team elimination.
 *
 * resetButton:
 *      The button that restarts the game.
 *
 ************************************************************/


// Container where team selection cards are displayed
const teamContainer = document.getElementById("teams");


// Displays number of teams still alive
const counter = document.getElementById("counter");


// List showing eliminated teams in order
const eliminatedList = document.getElementById("eliminated");


// Text area for game messages
// Example:
// "❌ Chelsea eliminated!"
// "🏆 Your club is Arsenal!"
const message = document.getElementById("message");


// Button used to eliminate a random team
const eliminateButton = document.getElementById("eliminateBtn");


// Button used to restart the game after completion
const resetButton = document.getElementById("resetBtn");