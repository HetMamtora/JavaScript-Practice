const input = document.getElementById('input');
const btn = document.getElementById("btn");
const wrng = document.querySelector('.wrng');
const guesses = document.getElementById("guesses")

const answer = Math.floor(Math.random()*100)+1;
const numGuesses = 0;

btn.addEventListener("click",()=>{
    guessesNumber();
});

function guessesNumber(){
    if(input.value<1 || input.value>100 || isNaN(input.value)){
        wrng.innerHTML = "Enter between 1 to 100."
    }
    else{
        numGuesses++;
    }
}