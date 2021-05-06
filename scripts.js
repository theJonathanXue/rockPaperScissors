function computerPlay() {
  var randomNum = Math.random();
  if (randomNum >= 0.68) {
    return "Rock";
  } else if (randomNum > 0.34) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
    return "You Tied!";
  }
  if (playerSelection.toUpperCase() == "ROCK") {
    if (computerSelection == "Paper") {
      return "You Lose! Paper beats Rock";
    }
    return "You Win! Rock beats Scissors!";
  }
  else if (playerSelection.toUpperCase() == "PAPER") {
    if (computerSelection == "Scissors") {
      return "You Lose! Scissors beats Paper";
    }
    return "You Win! Paper beats Rock!";
  }
  else {
    if (computerSelection == "Rock") {
      return "You Lose! Rock beats Scissors";
    }
    return "You Win! Scissors beats Paper!";
  }
}

function game() {
  var score = 0;
  for (let i = 0; i < 5; ++i) {
    let playerSelection = prompt("What is your choice?");
    playRound(playerSelection, computerSelection);
  }
}

  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
  console.log("Hello World");
