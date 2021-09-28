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
        return 1; //"You win! Rock crushes Scissor"
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') {
        return 2; //"You lose! Paper wraps Rock"
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
        return 3; //"You win! Paper wraps Rock"
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissor') {
        return 4; //"You lose! Scissor cuts Paper"
    } else if (playerSelection.toLowerCase() == 'scissor' && computerSelection.toLowerCase() == 'rock') {
        return 5; //"You lose! Rock crushes Scissor"
    } else if (playerSelection.toLowerCase() == 'scissor' && computerSelection.toLowerCase() == 'paper') {
        return 6; //"You win! Scissor cuts Paper"
    } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return 7; //"Its a tie!"
    } else {
        return 8; //"Invalid selection"
    }
    
  }

  function game() {
    
    let computerSelection = computerPlay();
    let j = 0; // my wins
    let k = 0; // computer wins
      for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Rock, Paper, or Scissor?");
          if (playRound(playerSelection, computerSelection) == 1 || playRound(playerSelection, computerSelection) == 3 || playRound(playerSelection, computerSelection) == 6) {
            j++;
            alert("You win!");
            alert("Score: " + j + " vs " + k);
          } else if (playRound(playerSelection, computerSelection) == 2 || playRound(playerSelection, computerSelection) == 4 || playRound(playerSelection, computerSelection) == 5) {
            k++;
            alert("You lose!");
            alert("Score: " + j + " vs " + k); 
          } else if (playRound(playerSelection, computerSelection) == 7) {
            alert("Its a tie!");
            alert("Score: " + j + " vs " + k);
          } else {
            alert("Invalid selection");
          }
        }
        if (j > k) {
            alert("You won the game!")
            alert("Score: " + j + " vs " + k);
        } else if (j < k) {
            alert("You lost the game!");
            alert("Score: " + j + " vs " + k);
        } else {
            alert("You have tied! Wait...how is that possible?");
        }
    }
          // every win, increase win counter by one
          // every loss, increase computer win counter by one
          // every tie, do nothing
          // display the results of each round
          // determine winner at end, display the winner and score count
console.log(game())    
    
    
  
