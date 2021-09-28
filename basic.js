function computerPlay() {
    // function to get random integer between 0 - 2
    let playhand = Math.floor(Math.random() * 3);
    // write if function and set 0 = rock, 1 = paper, 2 = scissor
    if (playhand == 0) {
        return "Rock";
    } else if (playhand == 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
    
}


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissor') {
        return "You win! Rock crushes Scissor";
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') {
        return "You lose! Paper wraps Rock";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
        return "You win! Paper wraps Rock";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissor') {
        return "You lose! Scissor cuts Paper";
    } else if (playerSelection.toLowerCase() == 'scissor' && computerSelection.toLowerCase() == 'rock') {
        return "You lose! Rock crushes Scissor";
    } else if (playerSelection.toLowerCase() == 'scissor' && computerSelection.toLowerCase() == 'paper') {
        return "You win! Scissor cuts Paper";
    } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "Its a tie!";
    } else {
        return "Invalid selection";
    }
    
  }
  
    const playerSelection = window.prompt("Rock, Paper, or Scissor?");
    const computerSelection = computerPlay();
  
  console.log(playRound(playerSelection, computerSelection));