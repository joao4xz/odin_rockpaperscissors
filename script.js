function getComputerChoice(){
  return Math.floor(Math.random() * 3);
}


//Translate the random number to rock (0) paper (1) or scissors (2).
function translateComputerChoice(num){
  if (num === 0){
    return "rock";
  }
  else if (num === 1){
    return "paper";
  }
  else if (num === 2){
    return "scissors";
  }
}

function getPlayerChoice(){
  return prompt("Rock, Paper or Scissors?");
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === "rock" && computerSelection === "scissors"){
    playerScore++;
    return "You won!";
  }
  else if (playerSelection === "paper" && computerSelection === "rock"){
    playerScore++;
    return "You won!";
  }
  else if (playerSelection === "scissors" && computerSelection === "paper"){
    playerScore++;
    return "You won!";
  }
  else if (playerSelection === "rock" && computerSelection === "paper"){
    computerScore++;
    return "You lost!";
  }
  else if (playerSelection === "paper" && computerSelection === "scissors"){
    computerScore++;
    return "You lost!";
  }
  else if (playerSelection === "scissors" && computerSelection === "rock"){
    computerScore++;
    return "You lost!";
  }
  else {
    return "Draw!";
  }
}

function game(playerScore, computerScore){
  if(playerScore > computerScore){
    return `You won with ${playerScore} points. Against ${computerScore} points.`;
  }
  else if(playerScore < computerScore){
    return `You lost with ${playerScore} points. Against ${computerScore} points.`;
  }
  else {
    return `It's a tie! You ended with ${playerScore} points. Against ${computerScore} points.`;
  }  
}

let playerScore = 0;
let computerScore = 0;

for(let i = 0; i < 5; i++){
  let computerSelection = getComputerChoice();
  let playerSelection = getPlayerChoice().toLowerCase();
  
  computerSelection = translateComputerChoice(computerSelection);

  console.log(`You chose ${playerSelection}`);
  console.log(`The computer chose ${computerSelection}`);

  console.log(playRound(playerSelection, computerSelection));
}

console.log(game(playerScore, computerScore));
