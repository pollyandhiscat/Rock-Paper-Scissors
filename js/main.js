function getComputerChoice(){

    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    console.log(choice);

}

function getPlayerChoice(){

    choice = prompt("Please choose rock, paper, or scissors.").toLowerCase();
    
    if (choice != 'rock' || choice != 'paper' || choice != 'scissors'){

        return false; 
    }

    else {

        return choice;
    }
}

function determineWinner(computerChoice, playerChoice){

    
}


function playGame() {

    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    let winner = determineWinner();
    console.log(winner);
}
