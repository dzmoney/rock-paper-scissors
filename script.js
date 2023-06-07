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
  for (let i = 0; i < 5; i++) {
    let userSelection = getUserChoice();
    let computerSelection = getComputerChoice();
    console.log(`You chose ${userSelection}`);
    console.log(`The computer chose ${computerSelection}`);
    let result = playRound(computerSelection, userSelection);
    console.log(result);

    keepScore(result);
  }

  //
  //USER CHOICE
  function getUserChoice() {
    let userInput = prompt("Choose: rock, paper, or scissors");
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
  function playRound(computerSelection, userSelection) {
    //switch case test truthiness of each case comparison
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
}

game();
