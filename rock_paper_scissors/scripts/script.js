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

ROCK_BUTTON.addEventListener("click",function(){beginRound("rock", round)});
PAPER_BUTTON.addEventListener("click",function(){beginRound("paper", round)});
SCISSORS_BUTTON.addEventListener("click",function(){beginRound("scissors", round)});

function beginRound(playerSelection, round){
    let playerChoice = playerSelection;
    let computerChoice = Math.floor(Math.random() * 2);
    roundCounter(round);
    console.log(playerChoice);
}

function roundCounter(round){
if (round < 5){
    round += round;
    ROUND_H1.innerHTML = "Round: " + round;
    return round
} else if (round == 5){
    if (wins > losses){
        console.log("You Win")
    } else {
        console.log("You loose!")
    }
}
}