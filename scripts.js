let playerWins = 0;
let computerWins = 0;
const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
  button.addEventListener('click', function () {
    playRound(button.id);
  });
});


function disableButtons() {
  buttons.forEach(elem => {
      elem.disabled = true
  })
}

function computerPlay() {
  let options = ['Rock', 'Paper', 'Scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let result = "";
  if (playerSelection == computerSelection) {
    result = "You Tied! Let's try again!"
      + "<br><br>Your score: " + playerWins + "<br>Computer score: " + computerWins;
  }
  else if ((playerSelection == "rock" && computerSelection == 'scissors') ||
    (playerSelection == "paper" && computerSelection == 'rock') ||
    (playerSelection == "scissors" && computerSelection == 'paper')) {
    playerWins += 1;
    result = ('You win! ' + playerSelection + ' beats ' + computerSelection + '!'
      + "<br><br>Your score: " + playerWins + "<br>Computer score: " + computerWins);

    if (playerWins == 5) {
      result += "<br><br> Congragulations, You have won!";
      disableButtons();

    }
  }
  else {
    computerWins += 1
    result = ('You lost! ' + computerSelection + ' beats ' + playerSelection + '!'
      + "<br><br>Your score: " + playerWins + "<br>Computer score: " + computerWins);

    if (computerWins == 5) {
      result += "<br><br> Too bad, you have lost :( Better luck next time!";
      disableButtons();

    }
  }

  document.getElementById('result').innerHTML = result;
  return;
}
