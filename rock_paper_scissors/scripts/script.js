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
  beginRound("rock");
});
PAPER_BUTTON.addEventListener("click", function () {
  beginRound("paper");
});
SCISSORS_BUTTON.addEventListener("click", function () {
  beginRound("scissors");
});

function beginRound(playerSelection) {
  let playerChoice = playerSelection;
  let computerChoice = gameChoices[Math.floor(Math.random() * 2)];
  roundCounter();
  console.log(`It is Round ${round}`);
  console.log(`The player chose ${playerChoice}`);
  console.log(`The computer chose ${computerChoice}`);
  if (playerChoice === computerChoice){
    drawsUpdate();
  } else if (playerChoice === "rock"){
    playRock(computerChoice);
  } else if (playerChoice === "paper"){
    playPaper(computerChoice);
  } else {
    playScissors(computerChoice);
  }
}

function roundCounter() {
  if (wins >= 3){
    alert("You win!");
    resetGame();
  } else if(loss >= 3){
    alert("You Lose!");
    resetGame();
  } else if (draws >= 3){
    alert("This game was a draw")
    resetGame();
  } else if ((round <= 5) && (wins < 3) && (loss < 3) && (draws < 3)){
    roundUpdate(round);
  }
}

function roundUpdate() {
  if (round < 6) {
    round = round + 1;
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

function playRock(computerChoice){
 if (computerChoice == "scissors"){
  console.log("scissors wins")
  winsUpdate();
 } else if (computerChoice == "paper"){
  console.log("paper wins")
  lossUpdate();
 }
}


function playPaper(computerChoice){
  if (computerChoice == "rock"){
    console.log("rock wins");
    winsUpdate()
  } else if (computerChoice == "scissors"){
    console.log("scissors wins");
    lossUpdate();
  }
}


function playScissors(computerChoice){
  if (computerChoice == "paper"){
    console.log("paper wins");
    winsUpdate();
  } else if (computerChoice == "rock"){
    console.log("rock wins");
    lossUpdate();
  }

}

function logScore(){
  console.log(`Round: ${round}`);
  console.log(`Wins: ${wins}`);
  console.log(`Losses: ${loss}`);
  console.log(`Draws: ${draws}`);
}