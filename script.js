function computerPlay(){
    /* Randomly return "Rock", "Paper" or "Scissors"*/
    // Make an array containing the options
    const options = ["Rock", "Paper", "Scissors"];

    // Generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random()*3);

    // Return array[randomNumber]
    return options[randomNumber];
}

function round(playerSelection, computerSelection) {
    /* Play one round of rock paper scissors.
    Take in two parameters - playerSelection and computerSelection
    these should be case insensitive
    Compare the parameters and output a string to indicate
    a win or a loose*/
    // Make playerSelection case insensitive
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    // Declare a message variable for the return message
    let message = "Undefined";

    // For clarity display the player and computer selections
    console.log(playerSelection);
    console.log(computerSelection);
    
    // Compare player and computer selection
    /*  Rock vs Scissor -> Win
        Rock vs Paper -> Lose
        Rock vs Rock -> Tie

        Scissor vs Paper -> win
        Scissor vs Rock -> Lose
        Scissor vs Scissor -> Tie

        Paper vs Rock -> Win
        Paper vs Scissor -> Lose
        Paper vs Paper -> Tie
    */
    if(playerSelection==="ROCK"){
        switch(computerSelection){
            case "SCISSORS":
                message = "You win!";
                break;
            case "PAPER":
                message = "You lose!";
                break;
            default:
                message = "Tie!";
        }
    }
    if(playerSelection==="PAPER"){
        switch(computerSelection){
            case "ROCK":
                message = "You win!";
                break;
            case "SCISSORS":
                message = "You lose!";
                break;
            default:
                message = "Tie!";
        }
    }
    if(playerSelection==="SCISSORS"){
        switch(computerSelection){
            case "PAPER":
                message = "You win!";
                break;
            case "ROCK":
                message = "You lose!";
                break;
            default:
                message = "Tie!";
        }
    }

    // Return the result message
    return message;

}