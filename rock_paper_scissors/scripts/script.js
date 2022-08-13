const ROCK_BUTTON = document.getElementById("rock");
const PAPER_BUTTON = document.getElementById("paper");
const SCISSORS_BUTTON = document.getElementById("scissors");

const ROUND_H1 = document.getElementById("round");
const WIN_H2 = document.getElementById("win");
const LOSS_H2 = document.getElementById("loss");
const DRAW_H2 = document.getElementById("draw");

var round = 0;
let wins = 0;
let loss = 0;
let draws = 0;

const gameChoices = ["rock", "paper", "scissors"];

ROCK_BUTTON.addEventListener("click", function () {
  beginRound("rock", (round += 1));
});
PAPER_BUTTON.addEventListener("click", function () {
  beginRound("paper", (round += 1));
});
SCISSORS_BUTTON.addEventListener("click", function () {
  beginRound("scissors", (round += 1));
});

function beginRound(playerSelection, round) {
  let playerChoice = playerSelection;
  let computerChoice = Math.floor(Math.random() * 2);
  roundCounter(round);
  console.log(playerChoice);
}

function roundCounter(round, wins, loss) {
  if (round <= 5) {
    roundUpdate(round);
  } else if (round == 5) {
    if (wins > loss) {
      roundUpdate(round);
      console.log("You Win");
    } else {
      console.log("You loose!");
      roundUpdate(round);
    }
  } else if (round === 6){
    resetGame();
  }
}

function roundUpdate(round) {
  if (round < 6) {
    ROUND_H1.textContent = "Rounds: " + round;
  }
}

function resetGame(){
  round = 0;
  wins = 0;
  draws = 0;
  loss = 0;
}

function winsUpdate(){
  wins += 1
  WIN_H2.textContent = "Wins: " + wins;
  return wins;
}

function lossUpdate(){
  loss += 1
  LOSS_H2.textContent = "loss: " + loss;
  return loss;
}

function drawsUpdate(){
  wins += 1
  DRAW_H2.textContent = "Draws: " + draws;
  return draws;
}