
let computerWins = 0;
let playerWins = 0;
let ties = 0;

const playerSelection = document.querySelector('#playerSelection');
let rockButton = playerSelection.querySelector('#rock');
let paperButton = playerSelection.querySelector('#paper');
let scissorButton = playerSelection.querySelector('#scissors');

rockButton.addEventListener('click', () => {

    playGame(rockButton.id)
});

paperButton.addEventListener('click', () => {

        playGame(paperButton.id)
});

scissorButton.addEventListener('click', () => {

    playGame(scissorButton.id)
});

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

    console.log('Playing game');
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice(choice);
    let result = determineWinner(computerChoice, playerChoice);
    let winner = result[1];
    game(winner);

}


function resetWinner() {

    let computerWins = 0;
    let playerWins = 0;
    let ties = 0;
}

function displayWinner(winner){

    result = `${winner} is the overall winner! Computer won ${computerWins} games. Player won ${playerWins} games. Tie games: ${ties}.`;
    alert(result)

}

function game(winner) {

    if (winner == 'computer') {
        computerWins += 1;
    }

    else if (winner == 'player') {

        playerWins += 1;
    }

    else if (winner == 'tie'){
        
        ties += 1;

    }

    let overallWinner = '';
    if (computerWins == 5){

        overallWinner = 'computer';
        displayWinner(overallWinner);
        resetWinner();

    }

    else if (playerWins == 5) {

        overallWinner = 'player';
        displayWinner(overallWinner);
        resetWinner();

    }

    else{

        ;
        
    }

}