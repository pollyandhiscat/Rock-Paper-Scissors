function getComputerChoice(){

    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    console.log(choice);

}