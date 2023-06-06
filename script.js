//
//
//USER CHOICE
function getUserChoice() {
  let userInput = prompt("Type: rock, paper, or scissors");
  //if input, output userSelection
  switch (userInput.toLowerCase()) {
    case "rock":
      return "rock";
      break;
    case "paper":
      return "paper";
      break;
    case "scissors":
      return "scissors";
      break;
    default:
      alert("Invalid answer. Please choose rock, paper, or scissors.");
      return null;
  }
}

let userSelection = getUserChoice();
console.log(`You chose ${userSelection}`);

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

//output compChoice
let computerSelection = getComputerChoice();
console.log(`The computer chose ${computerSelection}`);

//
//
//PLAY THE GAME
function playRound(computerSelection, userSelection) {
  switch (true) {
    case computerSelection === "rock" && userSelection === "scissors":
      return "You lose! Rock beats Scissors";
      break;
    case computerSelection === "rock" && userSelection === "rock":
      return "You tie!";
      break;
    case computerSelection === "rock" && userSelection === "paper":
      return "You win! Paper beats Rock";
      break;
    case computerSelection === "scissors" && userSelection === "paper":
      return "You lose! Scissors beats Paper";
      break;
    case computerSelection === "scissors" && userSelection === "scissors":
      return "You tie!";
      break;
    case computerSelection === "scissors" && userSelection === "rock":
      return "You win! Rock beats Scissors";
      break;
    case computerSelection === "paper" && userSelection === "rock":
      return "You lose! Paper beats Rock";
      break;
    case computerSelection === "paper" && userSelection === "paper":
      return "You tie!";
      break;
    case computerSelection === "paper" && userSelection === "scissors":
      return "You win! Scissors beats Paper";
      break;
  }
}

console.log(playRound(computerSelection, userSelection));
