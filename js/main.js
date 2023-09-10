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
    let message = result[0];
    let winner = result[1];
    return [message, winner];
}



const playerSelection = document.querySelector('#playerSelection');
// buttons is a node list.
let buttons = playerSelection.querySelectorAll('.player-button');
buttons.forEach(button => {

    button.addEventListener('click', ()=> {

        let choice = button.id.toString();
        let result = playGame(choice);
        alert(result[0]);

    } );
    
});


/* function game(rounds = 5) {

    if (typeof rounds !== 'number') {

        return `Sorry, you must provide a number of rounds (integer type). Your provided rounds of ${rounds} is of type ${typeof rounds}.`;
    }

    else {

        let computerWins = 0;
        let playerWins = 0;
        let ties = 0

        for (let i = 0; i < rounds; i++) {

            let result = playGame();
            let message = result[0];
            let winner = result[1];

            if (winner == 'computer') {
                computerWins += 1;
            }

            else if (winner == 'player') {

                playerWins += 1;
            }

            else if (winner == 'tie'){
                
                ties += 1;

            }

            else {

                continue;
            }


        }

        let overallWinner = '';
        if (computerWins > playerWins){

            overallWinner = 'computer';
        }

        else {

            overallWinner = 'player';
        }

        result = `${overallWinner} is the overall winner! Computer won ${computerWins} games. Player won ${playerWins} games. Tie games: ${ties}.`;
        console.log(result);
    }
}*/