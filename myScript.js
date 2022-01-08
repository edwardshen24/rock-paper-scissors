
const playerSelection = "roCK";
const computerSelection = computerPlay();


function computerPlay(){
    let choices = ["Rock","Paper","Scissors"];
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let revisedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log(revisedPlayerSelection, computerSelection)

    if (revisedPlayerSelection === "Rock" && computerSelection === "Rock")
        console.log(`You chose ${revisedPlayerSelection} and you won.`);
    else if(revisedPlayerSelection === "Rock" && computerSelection === "Paper")
        console.log("You lose.");
    else if(revisedPlayerSelection === "Rock" && computerSelection === "Scissors")
        console.log("You win.")
  }

function game(){
    playRound(playerSelection, computerSelection)
}

game();