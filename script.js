// Declare a function called getComputerChoice
// which randomly return either Rock, Paper or Scissors
function getComputerChoice() {
  // create an array of choices
  const choices = ["Rock", "Paper", "Scissors"];
  // return value at a random index
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

// declare a function that plays a single round
// accepts two parameters playerSelection and computerSelection
let win;
function playRound(playerSelection, computerSelection) {
  // and return a string that declares the winner
  let statement;
  if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  ) {
    statement = `You Lose! ${computerSelection} beats ${playerSelection}`;
    win = false;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    statement = `You Won! ${playerSelection} beats ${computerSelection}`;
    win = true;
  } else {
    statement = `It's draw! Both have chosen ${playerSelection}.`;
  }
  return statement;
}

// make the playerSelection case insensitive
function capitalize(userInput) {
  let firstLetter = userInput.charAt(0).toUpperCase();
  let remainingLetters = userInput.slice(1).toLowerCase();
  const output = firstLetter + remainingLetters;
  return output;
}

// create another function game()
function game() {
  let playerScore = computerScore = 0;
  // use loop to play 5 round
  // keep the score
  let result;
  for (let i = 0; i < 5; i++) {
    const playerSelection = capitalize(prompt("What's your choice: "));
    const computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    if (win === true) {
      playerScore += 1;
    } else {
      computerScore += 1;
    }
		// report the winner or loser
		let winner_loser;
		if (playerScore > computerScore) {
			winner_loser = "You Won, Computer Lose!";
		} else if (playerScore < computerScore) {
			winner_loser = "You Lose, Computer Won!";
		} else {
			winner_loser = "It's a tie!";
		}
		return winner_loser;
  }
}

console.log(game());


