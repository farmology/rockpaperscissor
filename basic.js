const container = document.querySelector('#container');
const displayParagraph = document.createElement('p');
const scoreParagraph = document.createElement('p');
const outcomeParagraph = document.createElement('p');
displayParagraph.classList.add('display');
container.appendChild(displayParagraph);
container.appendChild(scoreParagraph);
container.appendChild(outcomeParagraph);

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

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissor') || 
    (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') ||
    (playerSelection.toLowerCase() == 'scissor' && computerSelection.toLowerCase() == 'paper')) {
        playerScore++;
        displayParagraph.textContent = 'You win!';
        // display score here using current scores
        scoreParagraph.textContent = "Player: " + playerScore + " Computer " + computerScore;
        
    } else if ((playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') ||
    (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissor') ||
    (playerSelection.toLowerCase() == 'scissor' && computerSelection.toLowerCase() == 'rock')) {
        computerScore++;
        displayParagraph.textContent = 'You lose!';
        scoreParagraph.textContent = "Player: " + playerScore + " Computer " + computerScore;
        
    } else {
        displayParagraph.textContent = 'Tied!';
        scoreParagraph.textContent = "Player: " + playerScore + " Computer " + computerScore;
    }
    
  }
  const buttons = document.querySelectorAll('button');

  // we use the .forEach method to iterate through each button
  
  buttons.forEach((button) =>   
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        if (playerScore === 5) {
            outcomeParagraph.textContent = "You won the game!";
        } else if (computerScore === 5) {
            outcomeParagraph.textContent = "You lose the game...";
        }
    }));

  // function game() {
    
 //   let computerSelection = computerPlay();
  //  let j = 0; // my wins
  //  let k = 0; // computer wins
      
    //    let playerSelection = window.prompt("Rock, Paper, or Scissor?");
  //        if (playRound(playerSelection, computerSelection) == 1 || playRound(playerSelection, computerSelection) == 3 || playRound(playerSelection, computerSelection) == 6) {
   //         j++;
  //          alert("You win!");
  //          alert("Score: " + j + " vs " + k);
   //       } else if (playRound(playerSelection, computerSelection) == 2 || playRound(playerSelection, computerSelection) == 4 || playRound(playerSelection, computerSelection) == 5) {
  //          k++;
   //         alert("You lose!");
  //          alert("Score: " + j + " vs " + k); 
  //        } else if (playRound(playerSelection, computerSelection) == 7) {
  //          alert("Its a tie!");
  //          alert("Score: " + j + " vs " + k);
  //        } else {
  //          alert("Invalid selection");
   //       }
  //      
   //     if (j > k) {
   //         alert("You won the game!")
   //         alert("Score: " + j + " vs " + k);
   //     } else if (j < k) {
   //         alert("You lost the game!");
   //         alert("Score: " + j + " vs " + k);
   //     } else {
   //         alert("You have tied! Wait...how is that possible?");
    //    }
//  }
          // every win, increase win counter by one
          // every loss, increase computer win counter by one
          // every tie, do nothing
          // display the results of each round
          // determine winner at end, display the winner and score count
  
    
    
  
