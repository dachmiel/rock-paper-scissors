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
