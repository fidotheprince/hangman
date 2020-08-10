//game.js ONLY handles the logic of the game 

//determined by body parts in the hang man 1 guess = 1 body part
//evaluated array has to be held globally 
//global state saves in memory every new item added to array 
//since it is the same instance 

let gameWord = selectWord();
let totalLetters = gameWord.length;
let guesses = [];
let winArr = [];

//randomly select a word 
//us math to access index, display string at that index

function selectWord() {
   
    const wordBank = [ "CAT", "HAT", "BAT", "SPICY", "CCC", "FOREVER"];

    let wordIndex = Math.floor(Math.random() * wordBank.length);
    let selectedWord = wordBank[wordIndex];
    let gameWordArr = selectedWord.split("");

    return gameWordArr;

}

function restartGame() {
    location.reload();
}

//display gameWord & total number of letters in it 
console.log(gameWord);

//add user input = placed in array regardless of YES or NO 
//when array reaches certain number = loss 
//if YES eliminate that letter from array 
//when YES = number of letter in original word = WIN 


function compareValue(inputLetter, hiddenWord = gameWord, guessBank = guesses, winCount = winArr) {

    guessBank.push(inputLetter);
    hiddenWord.forEach(compare);

    function compare(secretLetter) {
        if (secretLetter === inputLetter) {
            guessBank.splice(inputLetter, 1);
            winCount.push(inputLetter);
        }
    }

    if (guessBank.length === 3) {
        console.log("you lose");
    }

    if( winCount.length === hiddenWord.length) {
        console.log("you win");
    }
   

}




