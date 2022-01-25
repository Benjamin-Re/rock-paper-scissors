function computerPlay(){
    /* Randomly return "Rock", "Paper" or "Scissors"*/
    // Make an array containing the options
    const options = ["rock", "paper", "scissors"];

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

// Refactor game() to adapt to UI
function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    // Get user input
    let userInput = null;
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.addEventListener("click", (e) => {
        userInput = e.target.dataset.choice;
        // Get computer input
        let computerInput = computerPlay();
        // Play a round, round(p,c)
        let result = round(userInput, computerInput);
        // Display the choices
        let display = document.querySelectorAll(".choices>p");
        display.item(0).textContent=`You chose: ${userInput}`;
        display.item(1).textContent=`Computer chose: ${computerInput}`;
        // Update playerpoints / computerpoints
        if(result === 1) {
            playerPoints++;
            display.item(2).textContent=`${userInput.toUpperCase()} beats ${computerInput.toUpperCase()}`;
        } else if (result === -1) {
            computerPoints++;
            display.item(2).textContent=`${computerInput.toUpperCase()} beats ${userInput.toUpperCase()}`;
        } else {
            display.item(2).textContent=`${computerInput.toUpperCase()} ties with ${userInput.toUpperCase()}`;
        }
        // Display updated points
        document.querySelector(".player .points").textContent=playerPoints;
        document.querySelector(".computer .points").textContent=computerPoints;
        // Once any player has five points he wins
        let winDisplay = document.querySelector(".winner");
        if(playerPoints >=5){
            winDisplay.textContent="You win";
            playerPoints = 0;
            computerPoints = 0;
        } else if (computerPoints >= 5) {
            winDisplay.textContent = "Computer wins";
            playerPoints = 0;
            computerPoints = 0;
        } else {
            // Else noone has won yet so clear this field
            winDisplay.textContent = "";
        }

    }));
}

game();
