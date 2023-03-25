let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let results = document.querySelector('#results');
let score = document.querySelector('#score');
let tryAgain = document.querySelector('.again');
let gameOver = false;

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    tryAgain.style.display = 'block';
}

let computerScore = 0; //score counters
let playerScore = 0;

//generate random computer choice
function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"]; 
    let x = Math.floor(Math.random() * 3);

    return computerChoices[x]; 
}

//compare selections
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        results.textContent = "Tie";
        //return "tie" play again
    } 
    else if ((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper")) {
        ++playerScore;
        score.innerHTML = `Player: ${playerScore} Computer: ${computerScore}`;
        results.innerHTML = `Round won <br> ${playerSelection} beats ${computerSelection}`;
        if (playerScore == 5) {
            score.innerHTML = `Winner! <br> <br> Player: ${playerScore} Computer: ${computerScore}`;
            gameOver = true;
            disableButtons();
        }
    }
    else {
        ++computerScore;
        score.innerHTML = `Player: ${playerScore} Computer: ${computerScore}`;
        results.innerHTML = `Round lost <br> Computer chose ${computerSelection}`;
            if (computerScore == 5) {
                score.innerHTML = `Computer wins <br> <br> Player: ${playerScore} Computer: ${computerScore}`;
                gameOver = true;
                disableButtons();
            }
        }
    return;
}

rock.addEventListener('click', () => {
    if (!gameOver) {
    playRound("rock", getComputerChoice())}
})

paper.addEventListener('click', () => {
    if (!gameOver) {
    playRound("paper", getComputerChoice())}
})

scissors.addEventListener('click', () => {
    if (!gameOver) {
    playRound("scissors", getComputerChoice())}
})