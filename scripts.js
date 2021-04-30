function computerPlay() {
  var randomNum = Math.random();
  if (randomNum >= 0.68) {
    return "Rock";
  } else if (randomNum > 0.34) {
    return "Paper";
  } else {
    return "Scizzors";
  }
}

function playRound(playerSelection, computerSelection) {
  // your code here!
} 

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
