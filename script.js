  //UPDATES THE SCORE
  let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };


updateScoreElement();

//This function (playGame) has a parameter playerMove that compares playermove with the  computerMove function to get a result.
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let Result = ('');
  if (playerMove === 'rock') {

    if(computerMove === 'Rock') {
    Result = 'Tie';
    }

    else if(computerMove === 'Paper') {
    Result = 'You Loose';
    }

    else if (computerMove === 'Scissors') {
    Result = 'You Win';
    };
    }

    if(playerMove === 'Paper') {

    if(computerMove === 'Rock') {
    Result = 'You Win';
    }
    else if(computerMove === 'Paper') {
    Result = 'Tie';
    }
    else if (computerMove === 'Scissors') {
    Result = 'You Loose';
    };
    }

    if(playerMove === 'Scissors') {

    if(computerMove === 'Rock') {
    Result = 'You Loose';
    }

    else if(computerMove === 'Paper') {
      Result = 'You Win';
    }

    else if (computerMove === 'Scissors') {
    Result = 'Tie';
    };
 }


 if(Result === 'You Win') {
  score.wins += 1;
 }
 else if(Result === 'You Loose') {
  score.losses += 1;
 }
 else if(Result === 'Tie') {
  score.ties += 1;
 }



 localStorage.setItem('score', JSON.stringify(score));

 document.querySelector('.js-result').innerHTML = Result;
 document.querySelector('.js-moves').innerHTML = `
 You
    <img src="./image-folder/${playerMove}.png" class="move-icon">
    <img src="./image-folder/${computerMove}.png" class="move-icon">

    computer`;

 updateScoreElement();

}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses:
              ${score.losses}, Ties: ${score.ties}`;
}




//This function is (pickComputerMove) helps to get that computers own move randomly.
let computerMove='';
function pickComputerMove() {
     const randomNumber = Math.random();
  let Result = ('');
  if(randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Paper';
  }
  else if(randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'Scissors';
  };
  return computerMove;
}


