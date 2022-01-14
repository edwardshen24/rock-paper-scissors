
const computerSelection = computerPlay();
let computerScore = 0;
let playerScore = 0;
const container = document.querySelector('#container');
const displayScore = document.createElement('div');
const displayGame = document.createElement('div');
const btn = document.querySelectorAll('button');
const replayButton = document.createElement("button");


function computerPlay(){
    let choices = ["Rock","Paper","Scissors"];
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    displayScore.style.color = "white";
    displayGame.style.color = "white";
    
    if ( playerScore === 5){
        displayScore.textContent = "Player wins!";
        replay();
    
    }
    else if (computerScore === 5) {
        displayScore.textContent = "Computer wins!";
        replay();
        
    }
    else
        displayScore.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore;
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
    
    container.appendChild(displayGame);
  }

 
function game(){
    btn.forEach((button) => { 
        button.addEventListener('click', () => {
            playRound(button.id, computerPlay())
        });
      });
}

function replay(){
    document.getElementById("Rock").disabled = true;
    document.getElementById("Paper").disabled = true;
    document.getElementById("Scissors").disabled = true;
    replayButton.innerHTML = "Replay?";
    replayButton.addEventListener("click", () => {
            computerScore = 0;
            playerScore = 0;
            document.getElementById("Rock").disabled = false;
            document.getElementById("Paper").disabled = false;
            document.getElementById("Scissors").disabled = false;
        });
    replayArea.appendChild(replayButton);
    
}

game()




