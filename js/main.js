function resetScores() {

    let playerScoreNumber = document.querySelector('#player-score-number');
    let computerScoreNumber = document.querySelector('#computer-score-number');
    playerScoreNumber.textContent = 0;
    computerScoreNumber.textContent = 0;
    computerWins = 0;
    playerWins = 0;
    ties = 0;

}

function updateScore(player) {

    if (player == 'player') {

        let playerScoreNumber = document.querySelector('#player-score-number');
        playerScoreNumber.textContent = playerWins;
        
    }

    else if ('computer') {

        let computerScoreNumber = document.querySelector('#computer-score-number');
        computerScoreNumber.textContent = computerWins;

    }

    else {

        ;
    }
}

function startListeners(rockButton, paperButton, scissorButton, resetButton){

    rockButton.addEventListener('click', () => {

        playGame(rockButton.id);
    });
    
    paperButton.addEventListener('click', () => {
    
            playGame(paperButton.id);
    });
    
    scissorButton.addEventListener('click', () => {
    
        playGame(scissorButton.id);
    });

    resetButton.addEventListener('click', () => {
    
        resetScores();
    });

}

let computerWins = 0;
let playerWins = 0;
let ties = 0;
const playerSelection = document.querySelector('#player-selection');
let rockButton = playerSelection.querySelector('#rock');
let paperButton = playerSelection.querySelector('#paper');
let scissorButton = playerSelection.querySelector('#scissors');
let resetButton = playerSelection.querySelector('#reset');
startListeners(rockButton, paperButton, scissorButton, resetButton);

function getComputerChoice() {

    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;

}

function getPlayerChoice(choice) {

    choice = choice.toLowerCase();

    if (choice != 'rock' && choice != 'paper' && choice != 'scissors') {

        return false;
    }

    else {

        return choice;
    }
}

function determineWinner(computerChoice, playerChoice) {

    if (computerChoice == playerChoice) {

        result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Tie game.`;
        winner = 'tie';
    }

    else if (computerChoice == 'rock') {

        if (playerChoice == 'paper') {
            result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Player wins.`;
            winner = 'player';
        }

        else {

            result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Computer wins.`;
            winner = 'computer';
        }
    }

    else if (computerChoice == 'paper') {

        if (playerChoice == 'scissors') {
            result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Player wins.`;
            winner = 'player';
        }

        else {

            result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Computer wins.`;
            winner = 'computer';
        }

    }

    else if (computerChoice == 'scissors') {

        if (playerChoice == 'rock') {
            result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Player wins.`;
            winner = 'player';
        }

        else {

            result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Computer wins.`;
            winner = 'computer';
        }
    }

    return [result, winner];
}

function playGame(choice) {

    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice(choice);
    let result = determineWinner(computerChoice, playerChoice);
    let winner = result[1];
    game(winner);

}

function displayWinner(winner){

    result = `${winner} is the overall winner! Computer won ${computerWins} games. Player won ${playerWins} games. Tie games: ${ties}.`;
    let resultDiv = document.createElement('div');
    let resultDisplay = document.createElement('h4');
    let playerSelection = document.querySelector('#player-selection');
    resultDiv.setAttribute('style', 'color: beige;');
    resultDisplay.textContent = result;
    resultDiv.appendChild(resultDisplay);
    playerSelection.appendChild(resultDiv);
    

}

function game(winner) {

    if (winner == 'computer') {
        computerWins += 1;
        updateScore(winner);
    }

    else if (winner == 'player') {

        playerWins += 1;
        updateScore(winner);
    }

    else if (winner == 'tie'){
        
        ties += 1;

    }

    let overallWinner = '';
    if (computerWins == 5){

        overallWinner = 'computer';
        displayWinner(overallWinner);
        resetScores();

    }

    else if (playerWins == 5) {

        overallWinner = 'player';
        displayWinner(overallWinner);
        resetScores();

    }

    else{

        ;
        
    }

}