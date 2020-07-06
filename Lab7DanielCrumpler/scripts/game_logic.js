let randomNumber = Math.floor(Math.random() * 100 + 1);
let guessCount = 0;
let resetButton;
let maxGuesses = 10;
let gameHasEnded = false;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessesMade = document.querySelector('.guessesMade');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const guessUBound = document.querySelector('.upperBound');
const changeUBound = document.querySelector('.changeUpperBound')

let upperBound = Number(guessUBound.value);

function checkGuess(){
    var userGuess = Number(guessField.value);

    if(guessCount === 0){
        guesses.textContent = 'Previous Guesses ('+randomNumber+'): ';
        guessesMade.textContent = 'Number of Guesses Made: 0/10';
    }

    guesses.textContent += userGuess + ' ';

    if(userGuess === randomNumber){
        lastResult.textContent = 'Congratulations you won!!!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        lowOrHi.style.backgroundColor = 'white';
        setGameOver();
    }
    
    if(userGuess > randomNumber) {
        lastResult.textContent = 'wrong';
        lastResult.style.backgroundColor = 'red';
        lowOrHi.textContent = 'too high';
        lowOrHi.style.backgroundColor = 'orange';
    } 
    
    if(userGuess < randomNumber) {
        lastResult.textContent = 'wrong';
        lastResult.style.backgroundColor = 'red';
        lowOrHi.textContent = 'too low';
        lowOrHi.style.backgroundColor = 'blue';
    } 

    guessCount++;
    guessesMade.textContent = 'Number of Guesses Made: '+ guessCount +'/10';
    guessField.focus();
    if(guessCount === maxGuesses){
        alert('Game Over: No More Guesses')
        setGameOver();
    }
}

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    guessUBound.disabled = false;
    changeUBound.disabled = false;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start New Game';
    document.body.appendChild(resetButton);
    gameHasEnded = true;
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 0;
    var upperBound = Number(guessUBound.value);
    randomNumber = Math.floor(Math.random() * upperBound) + 1;
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessUBound.disabled = true;
    changeUBound.disabled = true;

    const resetParas = document.querySelectorAll('resultParas p');
    for(let i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = '';        
    }

    if(gameHasEnded === true){ 
        resetButton.parentNode.removeChild(resetButton);
    }
    gameHasEnded = false;                      
    guessField.textContent = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
}

function verifyUpperBound(){
    if(guessUBound.value.length === 0){
        alert('value is required for upper bound');
        guessUBound.focus();
    }
    
    if(Number(guessUBound.value) === 0){
        alert('value for upper bound can not be zero');
        guessUBound.focus();
    } 
    else {
        resetGame();
    }    
}

guessSubmit.addEventListener('click', checkGuess);
changeUBound.addEventListener('blur', verifyUpperBound);
