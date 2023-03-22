//rock paper scissors program

//generate random computer choice
function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"]; //store options in array
    let x = Math.floor(Math.random() * 3); //generate random number from 0-2

    return computerChoices[x]; //return element accessed via random index
}

//compare selections
function playRound(playerSelection, computerSelection) {
    //display each win/loss scenario
    if (playerSelection == computerSelection) {
        return "tie";
    } 
    else if ((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper")) {
        return "win";
    }
    else {
        return "lost";
    }
}

function game() {
    //score counters
    let computerScore = 0;
    let playerScore = 0;
    let result;

    //iterate 5 rounds of games
    for (let i = 0; i < 5; ++i) {
        //get and store both selections in variables
        let playerSelection = prompt("Enter rock, paper, or scissors: \n");
        let computerSelection = getComputerChoice();

        //compare results of each round
        console.log(`Computer chose: ${computerSelection}`);
        result = playRound(playerSelection.toLowerCase(), computerSelection);
        console.log(result);

        
        //increment results
        if (result == "win") {
            ++playerScore;
        }
        else if (result == "lost") {
            ++computerScore;
        }
        else {
            continue;
        }
        
    }
    //display final scores
    if (playerScore > computerScore) {
        console.log("You won!");
    }
    else if (playerScore < computerScore) {
        console.log("You lost");
    }
    else {
        console.log("You tied");
    }
    console.log(`Your Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

game();

