/************************************************************
 * PREM PICKER
 *
 * Version:
 * v1.1
 *
 * Purpose:
 * A Premier League team elimination game where 20 clubs
 * compete until one team remains.
 *
 * Features:
 * - Random elimination
 * - Equal odds for every team
 * - Club profile reveal
 * - Team colors
 * - Restart functionality
 *
 ************************************************************/


/************************************************************
 * SECTION 1: TEAM DATABASE
 *
 * Stores all Premier League club information.
 *
 * Properties:
 *
 * name:
 *      Club name
 *
 * nickname:
 *      Common club nickname
 *
 * stadium:
 *      Home stadium
 *
 * founded:
 *      Year founded
 *
 * rival:
 *      Main rival
 *
 * titles:
 *      League titles
 *
 * color:
 *      Primary color
 *
 * secondary:
 *      Secondary color
 *
 ************************************************************/


const teams = [

{
name:"Arsenal",
nickname:"The Gunners",
stadium:"Emirates Stadium",
founded:1886,
rival:"Tottenham Hotspur",
titles:13,
color:"#EF0107",
secondary:"#FFFFFF"
},

{
name:"Aston Villa",
nickname:"The Villans",
stadium:"Villa Park",
founded:1874,
rival:"Birmingham City",
titles:7,
color:"#670E36",
secondary:"#95BFE5"
},

{
name:"Bournemouth",
nickname:"The Cherries",
stadium:"Vitality Stadium",
founded:1899,
rival:"Southampton",
titles:0,
color:"#DA291C",
secondary:"#000000"
},

{
name:"Brentford",
nickname:"The Bees",
stadium:"Gtech Community Stadium",
founded:1889,
rival:"Fulham",
titles:0,
color:"#E30613",
secondary:"#FFFFFF"
},

{
name:"Brighton",
nickname:"The Seagulls",
stadium:"American Express Stadium",
founded:1901,
rival:"Crystal Palace",
titles:0,
color:"#0057B8",
secondary:"#FFFFFF"
},

{
name:"Chelsea",
nickname:"The Blues",
stadium:"Stamford Bridge",
founded:1905,
rival:"Fulham",
titles:6,
color:"#034694",
secondary:"#FFFFFF"
},

{
name:"Coventry City",
nickname:"The Sky Blues",
stadium:"Coventry Building Society Arena",
founded:1883,
rival:"Leicester City",
titles:0,
color:"#6CABDD",
secondary:"#003B7A"
},

{
name:"Crystal Palace",
nickname:"The Eagles",
stadium:"Selhurst Park",
founded:1905,
rival:"Brighton",
titles:0,
color:"#1B458F",
secondary:"#C4122E"
},

{
name:"Everton",
nickname:"The Toffees",
stadium:"Hill Dickinson Stadium",
founded:1878,
rival:"Liverpool",
titles:9,
color:"#003399",
secondary:"#FFFFFF"
},

{
name:"Fulham",
nickname:"The Cottagers",
stadium:"Craven Cottage",
founded:1879,
rival:"Chelsea",
titles:0,
color:"#000000",
secondary:"#FFFFFF"
},

{
name:"Hull City",
nickname:"The Tigers",
stadium:"MKM Stadium",
founded:1904,
rival:"Leeds United",
titles:0,
color:"#F5A623",
secondary:"#000000"
},

{
name:"Ipswich Town",
nickname:"The Tractor Boys",
stadium:"Portman Road",
founded:1878,
rival:"Norwich City",
titles:1,
color:"#0044A9",
secondary:"#FFFFFF"
},

{
name:"Leeds United",
nickname:"The Whites",
stadium:"Elland Road",
founded:1919,
rival:"Manchester United",
titles:3,
color:"#FFCD00",
secondary:"#FFFFFF"
},

{
name:"Liverpool",
nickname:"The Reds",
stadium:"Anfield",
founded:1892,
rival:"Manchester United",
titles:20,
color:"#C8102E",
secondary:"#F6EB61"
},

{
name:"Manchester City",
nickname:"The Citizens",
stadium:"Etihad Stadium",
founded:1880,
rival:"Manchester United",
titles:10,
color:"#6CABDD",
secondary:"#FFFFFF"
},

{
name:"Manchester United",
nickname:"The Red Devils",
stadium:"Old Trafford",
founded:1878,
rival:"Liverpool",
titles:20,
color:"#DA291C",
secondary:"#FBE122"
},

{
name:"Newcastle United",
nickname:"The Magpies",
stadium:"St James' Park",
founded:1892,
rival:"Sunderland",
titles:4,
color:"#241F20",
secondary:"#FFFFFF"
},

{
name:"Nottingham Forest",
nickname:"The Reds",
stadium:"City Ground",
founded:1865,
rival:"Derby County",
titles:1,
color:"#DD0000",
secondary:"#FFFFFF"
},

{
name:"Sunderland",
nickname:"The Black Cats",
stadium:"Stadium of Light",
founded:1879,
rival:"Newcastle United",
titles:6,
color:"#EB172B",
secondary:"#FFFFFF"
},

{
name:"Tottenham Hotspur",
nickname:"Spurs",
stadium:"Tottenham Hotspur Stadium",
founded:1882,
rival:"Arsenal",
titles:2,
color:"#132257",
secondary:"#FFFFFF"
}

];



/************************************************************
 * SECTION 2: GAME VARIABLES
 ************************************************************/


let remaining = [...teams];

let eliminated = [];



/************************************************************
 * SECTION 3: UI ELEMENT REFERENCES
 ************************************************************/


const teamContainer =
document.getElementById("teams");

const counter =
document.getElementById("counter");

const eliminatedList =
document.getElementById("eliminated");

const message =
document.getElementById("message");

const eliminateButton =
document.getElementById("eliminateBtn");

const resetButton =
document.getElementById("resetBtn");



/************************************************************
 * SECTION 4: GAME FUNCTIONS
 ************************************************************/


/************************************************************
 * FUNCTION: renderTeams()
 *
 * Purpose:
 * Displays all remaining Premier League clubs.
 *
 * Updates:
 * - Club name
 * - Nickname
 * - Team color gradient
 * - Consistent card formatting
 *
 ************************************************************/

function renderTeams(){

    // Clear existing cards
    teamContainer.innerHTML = "";


    // Create card for every remaining club
    remaining.forEach(team => {


        const card = document.createElement("div");


        card.classList.add("team");


        /*
        Creates a consistent structure:

        CLUB NAME
        Nickname

        Example:

        ARSENAL
        The Gunners

        */


        card.innerHTML =

        `
        <div class="club-name">
            ${team.name}
        </div>

        <div class="club-nickname">
            ${team.nickname}
        </div>
        `;



        // Apply team color gradient
        card.style.background =

        `
        linear-gradient(
            135deg,
            ${team.color},
            ${team.secondary}
        )
        `;



        teamContainer.appendChild(card);


    });



    // Update counter

    counter.innerHTML =
    `Teams Remaining: ${remaining.length}`;

}





function eliminateTeam(){


if(remaining.length <= 1){
return;
}


const randomIndex =
Math.floor(Math.random()*remaining.length);



const eliminatedTeam =
remaining[randomIndex];



remaining.splice(randomIndex,1);



eliminated.push(eliminatedTeam);



eliminatedList.innerHTML +=

`
<li>
${eliminatedTeam.name}
</li>
`;



message.innerHTML =

`
❌ ${eliminatedTeam.name}
has been eliminated!
`;



renderTeams();


checkWinner();

}





function checkWinner(){


if(remaining.length === 1){

displayWinner(remaining[0]);


eliminateButton.style.display =
"none";


resetButton.classList.remove("hidden");

}

}





function displayWinner(team){


message.innerHTML =

`

<div class="winner">

<h2>🏆 YOUR CLUB IS</h2>


<h1>${team.name}</h1>


<h2>${team.nickname}</h2>


<div class="club-profile">

<p>
🏟 ${team.stadium}
</p>


<p>
📅 Founded:
${team.founded}
</p>


<p>
⚔ Rival:
${team.rival}
</p>


<p>
🏆 League Titles:
${team.titles}
</p>


</div>


</div>

`;

}





function resetGame(){


remaining=[...teams];

eliminated=[];


message.innerHTML="";

eliminatedList.innerHTML="";


eliminateButton.style.display =
"inline-block";


resetButton.classList.add("hidden");


renderTeams();

}



/************************************************************
 * SECTION 5: EVENT LISTENERS
 *
 * Connects buttons to game functions
 ************************************************************/


eliminateButton.onclick =
eliminateTeam;


resetButton.onclick =
resetGame;



/************************************************************
 * SECTION 6: START GAME
 ************************************************************/


renderTeams();