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

ROCK_BUTTON.addEventListener("click", beginRound(gameChoices[0]));
PAPER_BUTTON.addEventListener("click", beginRound(gameChoices[1]));
SCISSORS_BUTTON.addEventListener("click", beginRound(gameChoices[2]));

function beginRound(gameChoices, round){
    let computerChoice = Math.floor(Math.random() * 2);
    roundCounter(round);
}