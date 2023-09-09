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
    }

    else if (computerChoice == 'rock'){

        if (playerChoice == 'paper'){
            result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Player wins.`;
        }

        else {

            result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Computer wins.`;
        }
    }

    else if (computerChoice == 'paper'){

        if (playerChoice == 'scissors'){
            result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Player wins.`;
        }

        else {

            result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Computer wins.`;
        }   

    }
        
    else if (computerChoice == 'scissors'){

        if (playerChoice == 'rock'){
            result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Player wins.`;
        }

        else {

            result = `Computer chose ${computerChoice}. Player chose ${playerChoice}. Computer wins.`;
        }
    }

    return result;
}


function playGame() {

    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    let winner = determineWinner(computerChoice, playerChoice);
    console.log(winner);
}
