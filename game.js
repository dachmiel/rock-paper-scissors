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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let currRound = 1;

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

  while (humanScore < 5 && computerScore < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log("-----Round " + currRound + "-----");
    playRound(humanSelection, computerSelection);
    currRound++;
    console.log(humanScore);
    console.log(computerScore);
  }
  if (humanScore === 5) {
    console.log("You won the game! " + humanScore + "-" + computerScore);
  } else if (computerScore === 5) {
    console.log("You lost the game! " + humanScore + "-" + computerScore);
  }
}

playGame();
