let humanScore = 0;
let computerScore = 0;
let currRound = 1;

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
  return result;
}
function playRound(humanChoice, computerChoice) {
  const results = document.querySelector("#results");
  const runningScore = document.querySelector("#runningScore");
  const rpsButtons = document.querySelector("#rps");

  const resultMessage = document.createElement("div");
  resultMessage.classList.add("message");

  let message = "";

  if (humanChoice === computerChoice) {
    message = "Draw!";
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    message = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    message = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }

  runningScore.textContent = `You ${humanScore} - Computer ${computerScore}`;
  resultMessage.textContent = message;
  results.appendChild(resultMessage);

  if (humanScore === 5 || computerScore === 5) {
    const finalMessage = document.createElement("div");
    finalMessage.classList.add("final-message");
    const winner =
      humanScore === 5 ? "🎉 You won the game!" : "😞 You lost the game.";
    finalMessage.textContent = winner;
    results.appendChild(finalMessage);
    rpsButtons.style.visibility = "hidden";
  }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
  playRound("Scissors", getComputerChoice());
});
