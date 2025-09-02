let randomNumber =  parseInt((Math.random() * 100) +1);
console.log(randomNumber)

// selection of dom element 
const submit = document.querySelector('#submit')
const userInput = document.querySelector('#inputfield');
const guessSlot = document.querySelector('#guessess');
const remaining = document.querySelector('#lastResult');
const message = document.querySelector('#lowORhigh');
const startOver = document.querySelector('#resultParas');
const p = document.createElement('p');





// remaining value declaration ....

let newGuess = 1;
let prevGuess = [] ; 
let playGame = true;

if(playGame){
    submit.addEventListener('click' , (e) => {
        e.preventDefault();
        const guess = parseInt( userInput.value);
        validateGuess(guess);
       
    })
}

// function of project...

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter valid number ..")
    }
    else if (guess < 1){
        alert("Enter Number greater than 1 ")
    }
    else if(guess > 100) {
        alert("Enter Number less than 100 ")
    }else {
        prevGuess.push(guess);
        if(newGuess === 11){
            displayguess(guess)
            displayMessage(`Game over , Random Number was ${randomNumber}`);
            endgame();
        }else {
            checkGuess(guess);
            displayguess(guess);
        }
    }
}

//function for checkguess

function checkGuess(guess){

    if(guess === randomNumber){
        displayMessage('You Got it .');
        endgame();
    }else if(guess > randomNumber){
        displayMessage('Number is TOOO High');
    }
    else if(guess < randomNumber){
        displayMessage('Numver is TOOO Low');
    }
}

// function for displayguess

function displayguess(guess){
    userInput.value= ""
    guessSlot.innerText = prevGuess.join(',');
    newGuess++;
    remaining.innerText = `${11 - newGuess}`;


}

// function foe display message 
function displayMessage(guess){
 message.innerHTML = `<h2>${guess}</h2>`
}

//  function for end game 
 function endgame(){
    userInput.value="";
    userInput.setAttribute('disabled' , '');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newgame'>New Game Start</h2>`
    startOver.appendChild(p)
    playGame= false;
    newgame();


 }

 // function for start game ....
 function newgame() {
const newGameBtn = document.querySelector('#newgame')
newGameBtn.addEventListener('click' ,  (e) => {
    userInput.removeAttribute('disabled');
    randomNumber = parseInt(Math.random() * 100 + 1);
    newGuess = 1;
    prevGuess = [];
      guessSlot.textContent ='';
      remaining.innerHTML = `${11 - newGuess} `;
      startOver.removeChild(p);
      message.innerHTML = " ";
      playGame = true;
})
 }






// let randomNumber = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert('PLease enter a valid number');
//   } else if (guess < 1) {
//     alert('PLease enter a number more than 1');
//   } else if (guess > 100) {
//     alert('PLease enter a  number less than 100');
//   } else {
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over. Random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage(`You guessed it right`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is TOOO low`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is TOOO High`);
//   }
// }

// function displayGuess(guess) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess} `;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }

// function newGame() {
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     ;
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 prevGuess = [];
//     numGuess = 1- numGuess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);

//     playGame = true;
//   });
// }

