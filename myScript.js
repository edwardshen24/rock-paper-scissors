
const computerSelection = computerPlay();


function computerPlay(){
    let choices = ["Rock","Paper","Scissors"];
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let revisedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (revisedPlayerSelection === computerSelection)
        return ("It's a tie.");
    else if(revisedPlayerSelection === "Rock" && computerSelection === "Paper")
        return ("You lose.");
    else if(revisedPlayerSelection === "Rock" && computerSelection === "Scissors")
        return ("You win.");
    else if(revisedPlayerSelection === "Paper" && computerSelection === "Rock")
        return ("You win.");
    else if(revisedPlayerSelection === "Paper" && computerSelection === "Scissors")
        return ("You lose.");
    else if(revisedPlayerSelection === "Scissors" && computerSelection === "Rock")
        return ("You lose.")
    else if(revisedPlayerSelection === "Scissors" && computerSelection === "Paper")
        return ("You win.")
  }

 
function game(){
    let playerSelection;
    for (let i = 1; i<=5; i++){
        playerSelection = prompt("Enter your choice:");
        alert( playRound(playerSelection, computerPlay()));
    }
}

game()
