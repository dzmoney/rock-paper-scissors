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
