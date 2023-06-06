//function getComputerChoice
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
console.log(getComputerChoice());
