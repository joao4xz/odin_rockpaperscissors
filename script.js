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

function score(playerScore, computerScore){
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
let round = 0
let divFlag = 0;
function game(playerSelection){
  let computerSelection = getComputerChoice();
  
  computerSelection = translateComputerChoice(computerSelection);

  container = document.getElementById('container');
  if(round != 0){
    container.removeChild(document.getElementById('remove'));
    container.removeChild(document.getElementById('remove2'));
    container.removeChild(document.getElementById('remove3'));
  }
  if(divFlag === 1){
    container.removeChild(document.getElementById('remove4'));
    divFlag = 0;
  }
  
  div = document.createElement('div');
  div2 = document.createElement('div');
  div3 = document.createElement('div');


  div.appendChild(document.createTextNode(`You chose ${playerSelection}`));
  div.appendChild(document.createElement('br'));
  div.appendChild(document.createElement('br'));
  div.appendChild(document.createTextNode(`The computer chose ${computerSelection}`));
  div.setAttribute('class', 'Text');
  div.setAttribute('id', 'remove');
  container.appendChild(div);

  div2.appendChild(document.createTextNode(playRound(playerSelection, computerSelection)));
  div2.setAttribute('class', 'Text');
  div2.setAttribute('id', 'remove2');
  container.appendChild(div2);

  div3.appendChild(document.createTextNode(`Your score: ${playerScore}`));
  div3.appendChild(document.createElement('br'));
  div3.appendChild(document.createElement('br'));
  div3.appendChild(document.createTextNode(`The computer score: ${computerScore}`));
  div3.setAttribute('class', 'Text');
  div3.setAttribute('id', 'remove3');
  container.appendChild(div3);

  round++;

  if(playerScore === 5 || computerScore === 5){
    div4 = document.createElement('div');
    div4.appendChild(document.createTextNode(score(playerScore, computerScore)));
    div4.setAttribute('class', 'Text');
    div4.setAttribute('id', 'remove4');
    container.removeChild(document.getElementById('remove'));
    container.removeChild(document.getElementById('remove2'));
    container.removeChild(document.getElementById('remove3'));
    container.appendChild(div4);
    playerScore = 0;
    computerScore = 0;
    round = 0
    divFlag = 1;
  }
}

buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    game(button.className)
  });
});