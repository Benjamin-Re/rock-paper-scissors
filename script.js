function computerPlay(){
    /* Randomly return "Rock", "Paper" or "Scissors"*/
    // Make an array containing the options
    const options = ["Rock", "Paper", "Scissors"];

    // Generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random()*3);

    // Return array[randomNumber]
    return options[randomNumber];
}