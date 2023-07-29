// answer = prompt("What the heck going on");
// console.error(answer);

// Declare a function called getComputerChoice
// which randomly return either Rock, Paper or Scissors
function getComputerChoice() {
    // create an array of choices
    const choices = [
        'Rock', 'Paper', 'Scissors'
    ];
    // return value at a random index
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

// declare a function that accepts two 

console.log(getComputerChoice())
