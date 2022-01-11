
const computerSelection = computerPlay();
let computerScore = 0;
let playerScore = 0;
const container = document.querySelector('#container');
const displayScore = document.createElement('div');
const displayGame = document.createElement('div');

function computerPlay(){
    let choices = ["Rock","Paper","Scissors"];
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    displayScore.style.color = "white";
    displayGame.style.color = "white";
    if ( playerScore !== 5|| computerScore !== 5)
        displayScore.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore;
    else if (playerScore === 5)
        displayScore.textContent = "Player wins!";
    else
        displayScore.textContent = "Computer wins!";
    
    container.appendChild(displayScore);
    
    if (playerSelection === computerSelection)
        displayGame.textContent =  (`You chose ${playerSelection} and the computer chose ${computerSelection}, it's a tie.`);
    else if(playerSelection === "Rock" && computerSelection === "Paper"){
        displayGame.textContent =  (`You chose ${playerSelection} and the computer chose ${computerSelection}, you lose.`);
        computerScore++;
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        displayGame.textContent =   (`You chose ${playerSelection} and the computer chose ${computerSelection}, you win.`);
        playerScore++;
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        displayGame.textContent =  (`You chose ${playerSelection} and the computer chose ${computerSelection}, you win.`);
        playerScore++;
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        displayGame.textContent =   (`You chose ${playerSelection} and the computer chose ${computerSelection}, you lose.`);
        computerScore++;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        displayGame.textContent =   (`You chose ${playerSelection} and the computer chose ${computerSelection}, you lose.`);
        computerScore++;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        displayGame.textContent =   (`You chose ${playerSelection} and the computer chose ${computerSelection}, you win.`);
        playerScore++;
    }
    console.log(playerScore, computerScore)
    container.appendChild(displayGame);
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
