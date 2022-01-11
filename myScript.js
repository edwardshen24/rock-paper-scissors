
const computerSelection = computerPlay();

function computerPlay(){
    let choices = ["Rock","Paper","Scissors"];
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let revisedPlayerSelection = playerSelection.charAt(0).toUpperCase() 
        + playerSelection.slice(1).toLowerCase();
    
    if (revisedPlayerSelection === computerSelection)
        return (`You chose ${revisedPlayerSelection} and the computer chose ${computerSelection}, it's a tie.`);
    else if(revisedPlayerSelection === "Rock" && computerSelection === "Paper")
        return (`You chose ${revisedPlayerSelection} and the computer chose ${computerSelection}, you lose.`);
    else if(revisedPlayerSelection === "Rock" && computerSelection === "Scissors")
        return (`You chose ${revisedPlayerSelection} and the computer chose ${computerSelection}, you win.`);
    else if(revisedPlayerSelection === "Paper" && computerSelection === "Rock")
        return (`You chose ${revisedPlayerSelection} and the computer chose ${computerSelection}, you win.`);
    else if(revisedPlayerSelection === "Paper" && computerSelection === "Scissors")
        return (`You chose ${revisedPlayerSelection} and the computer chose ${computerSelection}, you lose.`);
    else if(revisedPlayerSelection === "Scissors" && computerSelection === "Rock")
        return (`You chose ${revisedPlayerSelection} and the computer chose ${computerSelection}, you lose.`);
    else if(revisedPlayerSelection === "Scissors" && computerSelection === "Paper")
        return (`You chose ${revisedPlayerSelection} and the computer chose ${computerSelection}, you win.`);
  }

 
function game(){
    const btn = document.querySelectorAll('button');
    btn.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
            console.log(playRound(button.id, computerPlay()));
        });
      });
}

game()

//for (let i = 1; i<=5; i++)