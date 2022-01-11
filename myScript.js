
const computerSelection = computerPlay();
let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    let choices = ["Rock","Paper","Scissors"];
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection)
        console.log (`You chose ${playerSelection} and the computer chose ${computerSelection}, it's a tie.`);
    else if(playerSelection === "Rock" && computerSelection === "Paper"){
        console.log (`You chose ${playerSelection} and the computer chose ${computerSelection}, you lose.`);
        computerScore++;
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        console.log (`You chose ${playerSelection} and the computer chose ${computerSelection}, you win.`);
        playerScore++;
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        console.log (`You chose ${playerSelection} and the computer chose ${computerSelection}, you win.`);
        playerScore++;
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        console.log (`You chose ${playerSelection} and the computer chose ${computerSelection}, you lose.`);
        computerScore++;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        console.log (`You chose ${playerSelection} and the computer chose ${computerSelection}, you lose.`);
        computerScore++;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        console.log (`You chose ${playerSelection} and the computer chose ${computerSelection}, you win.`);
        playerScore++;
    }
    console.log(playerScore, computerScore)

  }

 
function game(){
    const btn = document.querySelectorAll('button');
    btn.forEach((button) => { 
        button.addEventListener('click', () => {
            playRound(button.id, computerPlay())
        });
      });
}

game()



//for (let i = 1; i<=5; i++)
