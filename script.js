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
  // for (let i = 0; i < 5; i++)
  function plchldRounds() {
    let userSelection = getUserChoice();
    let computerSelection = getComputerChoice();
    console.log(`You chose ${userSelection}`);
    console.log(`The computer chose ${computerSelection}`);
    let result = playRound(computerSelection, userSelection);
    console.log(result);

    keepScore(result);
  }
  plchldRounds();

  //
  //USER CHOICE
  function getUserChoice() {
    let userInput = "rock";
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
    if (computerSelection === userSelection) {
      return "You tie!";
    } else if (
      (computerSelection === "rock" && userSelection === "scissors") ||
      (computerSelection === "scissors" && userSelection === "paper") ||
      (computerSelection === "paper" && userSelection === "rock")
    ) {
      return `You lose! ${computerSelection} beats ${userSelection}`;
    } else {
      return `You win! ${userSelection} beats ${computerSelection}`;
    }
  }
}

game();
