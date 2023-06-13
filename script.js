//KEEP SCORE FUNCTIONALITY
let userScore = 0;
let computerScore = 0;

function keepScore(result) {
  if (result && result.startsWith("You win!")) {
    userScore++;
  } else if (result && result.startsWith("You lose!")) {
    computerScore++;
  }

  console.log(`You: ${userScore} \nComputer: ${computerScore}`);
}
//
//
//
//report winner at the end

function game() {
  //PLAY 5 ROUNDS
  for (let i = 0; i < 5; i++) {}

  //
  //USER CHOICE
  function getUserChoice() {
    let btnRock = document.querySelector("#btn-rock");
    let btnPaper = document.querySelector("#btn-paper");
    let btnScissors = document.querySelector("#btn-scissors");

    btnRock.addEventListener("click", () => {
      userSelection = "rock";
      playRound();
    });
    btnPaper.addEventListener("click", () => {
      userSelection = "paper";
      playRound();
    });
    btnScissors.addEventListener("click", () => {
      userSelection = "scissors";
      playRound();
    });
  }

  //
  //COMPUTER CHOICE
  function getComputerChoice() {
    //define choices
    let choice = ["rock", "paper", "scissors"];

    //create random index based on number of choices
    //by multiplying Math.random by choice.length (length of array)
    //we ensure that resulting output is between 0-2 and will
    //not fall outside range of array options
    let randomIndex = Math.floor(Math.random() * choice.length);

    //access choice at a random index position
    return choice[randomIndex];
  }

  //
  //
  //PLAY THE GAME
  function playRound() {
    let computerSelection = getComputerChoice();

    console.log(`You chose ${userSelection}`);
    console.log(`The computer chose ${computerSelection}`);

    let result;

    if (computerSelection === userSelection) {
      result = "You tie!";
    } else if (
      (computerSelection === "rock" && userSelection === "scissors") ||
      (computerSelection === "scissors" && userSelection === "paper") ||
      (computerSelection === "paper" && userSelection === "rock")
    ) {
      result = `You lose! ${computerSelection} beats ${userSelection}`;
    } else {
      result = `You win! ${userSelection} beats ${computerSelection}`;
    }

    keepScore(result);
  }

  getUserChoice();
}

document.addEventListener("DOMContentLoaded", () => {
  game();
});
