function getComputerChoice() {
  let result;
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    result = "Rock";
  } else if (randomNumber === 2) {
    result = "Paper";
  } else if (randomNumber === 3) {
    result = "Scissors";
  }
  //   console.log(result);
  return result;
}

function getHumanChoice() {
  let userInput = prompt("Throw 'Rock', 'Paper', or 'Scissors'!");
  //   console.log(userInput);
  return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toUpperCase();
  computerChoice = computerChoice.toUpperCase();

  // console.log(humanChoice);
  // console.log(computerChoice);
  if (humanChoice === computerChoice) {
    console.log("Draw!");
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK")
  ) {
    console.log("You win! " + humanChoice + " beats " + computerChoice);
    humanScore++;
  } else {
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
    computerScore++;
  }
  //   console.log(humanScore);
  //   console.log(computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
