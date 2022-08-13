const ROCK_BUTTON = document.getElementById("rock");
const PAPER_BUTTON = document.getElementById("paper");
const SCISSORS_BUTTON = document.getElementById("scissors");

const ROUND_H1 = document.getElementById("round");
const WIN_H2 = document.getElementById("win");
const LOSS_H2 = document.getElementById("loss");
const DRAW_H2 = document.getElementById("draw");

const gameChoices = ["rock", "paper", "scissors"];

let round = 0;
let wins = 0;
let loss = 0;
let draws = 0;

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
  let computerChoice = gameChoices[Math.floor(Math.random() * 2)];
  roundCounter(round);
  console.log(`It is Round ${round}`);
  console.log(`The player chose ${playerChoice}`);
  console.log(`The computer chose ${computerChoice}`);
  if (playerChoice === computerChoice){
    drawsUpdate();
  } else if (playerChoice === "rock"){
    playRock();
  } else if (playerChoice === "paper"){
    playPaper();
  } else {
    playScissors();
  }
}

function roundCounter(round, wins, loss) {
  if (round <= 5) {
    roundUpdate(round);
  } else if (round == 5) {
    
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
  ROUND_H1.textContent = "Rounds: " + round;
  WIN_H2.textContent = "Wins: " + wins;
  LOSS_H2.textContent = "loss: " + loss;
  DRAW_H2.textContent = "Draws: " + draws;
}

function winsUpdate(){
  wins += 1;
  WIN_H2.textContent = "Wins: " + wins;
  console.log("You won this round");
  logScore();
  return wins;
}

function lossUpdate(){
  loss += 1;
  LOSS_H2.textContent = "loss: " + loss;
  console.log("You lost this round")
  logScore()
  return loss;
}

function drawsUpdate(){
  draws += 1;
  DRAW_H2.textContent = "Draws: " + draws;
  console.log("This was a draw");
  logScore()
  return draws;
}

