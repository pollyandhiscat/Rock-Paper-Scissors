function getComputerChoice(){

    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;

}

function getPlayerChoice(){

    choice = prompt("Please choose rock, paper, or scissors.").toLowerCase();
    
    if (choice != 'rock' && choice != 'paper' && choice != 'scissors'){

        return false; 
    }

    else {

        return choice;
    }
}

function determineWinner(computerChoice, playerChoice){

    if (computerChoice == playerChoice) {

        result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Tie game.`;
        winner = 'tie';
    }

    else if (computerChoice == 'rock'){

        if (playerChoice == 'paper'){
            result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Player wins.`;
            winner = 'player';
        }

        else {

            result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Computer wins.`;
            winner = 'computer';
        }
    }

    else if (computerChoice == 'paper'){

        if (playerChoice == 'scissors'){
            result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Player wins.`;
            winner = 'player';
        }

        else {

            result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Computer wins.`;
            winner = 'computer';
        }   

    }
        
    else if (computerChoice == 'scissors'){

        if (playerChoice == 'rock'){
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


function playGame() {

    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    let result = determineWinner(computerChoice, playerChoice);
    let message = result[0];
    let winner = result[1];
    console.log(message);
    console.log(`Winner: ${winner}`);
}

function playRound(rounds=5){

    /* Play a round of rock,paper,scissors.
    the default number of games is five, but you can pass
    a different number if you wish to play more or less.
    */

    if (typeof rounds !== 'number') {

        return `Sorry, you must provide a number of rounds (integer type). Your provided rounds of ${rounds} is of type ${typeof rounds}.`;
    }

    else {

        for (let i = 0; i < rounds; i++){

            playGame();

        }
    }
}
