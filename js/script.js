let randomNum = Math.floor(Math.random()*100)+1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const loworHi = document.querySelector(".loworHi");


const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessfield");

let guessCount=1;
let resetButton;


function checkGuess(){
    const userGuess = Number(guessField.value);
    if (guessCount === 1){
        guesses.textContent = "previous guesses: ";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if(userGuess === randomNum){

        lastResult.textContent="Congratulations! You got it right!";
        lastResult.style.backgroundColor ="green";
        loworHi = "";
        setGameOver();

    }
    else if (guessCount === 10) 
        {

            lastResult.textContent = "!!!GAME OVER!!!";
            lowOrHi.textContent = "";
            setGameOver();

        } 
    else {

        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";

        if (userGuess < randomNumber) {

            lowOrHi.textContent = "Last guess was too low!";
        
        } 
        else if (userGuess > randomNumber) {
            
            lowOrHi.textContent = "Last guess was too high!";
        }
  }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}


