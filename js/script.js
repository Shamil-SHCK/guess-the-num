
let randomNum = Math.floor(Math.random()*100)+1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");


const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

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
        lowOrHi.textContent = "";
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

        if (userGuess < randomNum) {

            lowOrHi.textContent = "Last guess was too low!";
        
        } 
        else if (userGuess > randomNum) {

            lowOrHi.textContent = "Last guess was too high!";
        }
  }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

//to call it on click at submit button
guessSubmit.addEventListener("click",checkGuess);

function setGameOver(){

    guessField.disabled = true;
    guessSubmit.disabled =true;
     resetButton = document.createElement("button");
     resetButton.textContent = "start a new game";
     document.body.append(resetButton);
     resetButton.addEventListener("click",resetGame);

    }

function resetGame(){

    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
  
    for (const resetPara of resetParas) {
    resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNum = Math.floor(Math.random() * 100) + 1;
}
