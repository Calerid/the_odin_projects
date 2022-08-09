// Variables in this section will be applied to game logic through event listeners contained on ROCK, PAPER, and SCISSORS.

const SELECTROCK = "rock"
const SELECTPAPER = "paper"
const SELECTSCISSORS = "scissors"

//Variables in this section will initiate the game and pass on the variables in the previous section.

const ROCK = document.getElementById("rock").addEventListener('click', roundInitiate(ROCK));
const PAPER = document.getElementById("paper").addEventListener('click', roundInitiate(PAPER));
const SCISSORS = document.getElementById("scissors").addEventListener('click', roundInitiate(SCISSORS));

//This variable will call a function to reset the entire game.

const RESET = document.getElementById("reset").addEventListener('click', reset());

//Variables in this section will be used to update the game values in the index.html file.

const ROUNDS = getElementById("rounds");
const WINS = getElementById("wins");
const LOSSES = getElementById("losses")
const DRAWS = getElementById("draws");

//variables in this section will change based on game logic. They will update values based on the game logic.
let rounds = 0;
let wins = 0;
let draws = 0;
let draws = 0;




