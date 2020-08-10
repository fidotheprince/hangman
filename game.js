//game.js ONLY handles the logic of the game 

//guesses allowed determined by body parts in the hang man 1 guess = 1 body part
//evaluated arrays have to be held globally 
//global state saves in memory every new item added or removed to array since it is the same instance 
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

//display gameWord  
console.log(gameWord);


//compareValue - evaluates user input and return indicates a win or a loss 
function compareValue(inputLetter, hiddenWord = gameWord, guessBank = guesses, winCount = winArr) {
    //add user input into guessBank(array) regardless of a correct or incorrect guess
    guessBank.push(inputLetter);
    hiddenWord.forEach(compare);

    //if user input matches a hidden letter, remove input from the guessBank 
    //preventing the total number of guesses (items in guessBank) from incrementing 
    //if user input matches a hidden letter, add input to winCount(array)
    function compare(secretLetter) {
        if (secretLetter === inputLetter) {
            guessBank.splice(inputLetter, 1);
            winCount.push(inputLetter);
        }
    }

    //when guessBank reaches a certain number (of allowed guesses), the player loses 
    if (guessBank.length === 7) {
        console.log("you lose");
    }

    //when number of letters (items) in the winCount match the number of letters (items) in the hiddenWord, the player wins
    if( winCount.length === hiddenWord.length) {
        console.log("you win");
    }
   

}




