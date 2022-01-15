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

    // Declare a result variable that takes 1 for win, -1 for lost and 0 for tie
    let result = 0;

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
                result = 1;
                break;
            case "PAPER":
                result = -1;
                break;
            default:
                result = 0;
        }
    }
    if(playerSelection==="PAPER"){
        switch(computerSelection){
            case "ROCK":
                result = 1;
                break;
            case "SCISSORS":
                result = -1;
                break;
            default:
                result = 0;
        }
    }
    if(playerSelection==="SCISSORS"){
        switch(computerSelection){
            case "PAPER":
                result = 1;
                break;
            case "ROCK":
                result = -1;
                break;
            default:
                result = 0;
        }
    }
    // Return the result result
    return result;

}



function game() {

    // declare variables to keep score
    let playerPoints = 0;
    let computerPoints = 0;

    // Play five rounds
    for(i = 1; i <=5; i++){
        // Take user input and computer input and store them in variables and print them for the usesr to see
        
        // Make sure the user inputs a choice that is allowed

        let userInput = prompt("Make a choice - Rock, paper or scissorS!");
        while(userInput === null || userInput.toUpperCase() != "ROCK" && userInput.toUpperCase() != "PAPER" && userInput.toUpperCase() != "SCISSORS"){
            userInput = prompt("Please make a VALID choice - Rock, paper or scissorS!");
        }
        
        let computerInput = computerPlay();
        let roundResult = round(userInput, computerInput);
        console.log(`Your choice: ${userInput}, the computer's choice: ${computerInput}`);

        // Count the number of wins of player and computer    
        if(roundResult === 1) {
            playerPoints++;
            console.log("You win this round.");
        } else if (roundResult === -1) {
            computerPoints++;
            console.log("The computer wins this round.");
        } else {
            console.log("It's a tie");
        }
    }

    // Display the winner
    if (playerPoints > computerPoints){
        console.log(`You win the game with ${playerPoints} points.`);
    } else if (playerPoints < computerPoints) {
        console.log(`The computer wins the game with ${playerPoints} points.`);
    } else {
        console.log(`It's a tie. Player: ${playerPoints}, Computer: ${computerPoints}`);
    }

}