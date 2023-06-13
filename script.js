//declare variables
let userScore = 0;
let computerScore = 0;
let maxScore = 5;

function getUserChoice() {
  let btnRock = document.querySelector("#btn-rock");
  let btnPaper = document.querySelector("#btn-paper");
  let btnScissors = document.querySelector("#btn-scissors");

  btnRock.addEventListener("click", () => {
    let choice = "rock";
  });
  btnPaper.addEventListener("click", () => {
    let choice = "paper";
  });
  btnScissors.addEventListener("click", () => {
    let choice = "scissors";
  });

  choice += userChoice;
  return userChoice;
}

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];

  //create random index based on number of choices
  //by multiplying Math.random by choice.length (length of array)
  //we ensure that resulting output is between 0-2 and will
  //not fall outside range of array options
  let randomIndex = Math.floor(Math.random() * choice.length);

  //access choice at a random index position
  let computerChoice = choice[randomIndex];
  return computerChoice;
}

function playRound(userChoice, computerChoice) {
  if (computerChoice === userChoice) {
    console.log("You tie!");
  } else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "scissors" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "rock")
  ) {
    console.log(`You lose! ${computerChoice} beats ${userChoice}`);
  } else {
    console.log(`You win! ${userChoice} beats ${computerChoice}`);
  }
}

// function keepScore(result) {
//   if (result && result.startsWith("You win!")) {
//     userScore++;
//   } else if (result && result.startsWith("You lose!")) {
//     computerScore++;
//   }

//   console.log(`You: ${userScore} \nComputer: ${computerScore}`);

//
//
//
//IF NEEDED
// document.addEventListener("DOMContentLoaded", () => {});
