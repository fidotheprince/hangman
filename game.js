//game.js ONLY handles the logic of the game 

//determined by body parts in the hang man 1 guess = 1 body part
//evaluated array has to be held globally 
//global state saves in memory every new item added to array 
//since it is the same instance 

let gameWord = selectWord();
let totalLetters = gameWord.length;
let winCount = 0;
let turnCount = 0;
let noMatch = [];

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
console.log(gameWord, totalLetters);

function compareValue(inputLetter, hiddenWord = gameWord, noMatchArr = noMatch) {

    //iterate through existing array to compare input
    for (let i = 0; i <= hiddenWord.length - 1; i++) {
        let hiddenLetter = hiddenWord[i];
        console.log(inputLetter, hiddenLetter);

    //replace match with a boolean statement of true 
        if (inputLetter === hiddenLetter) {
            hiddenWord.splice(i, 1, true);
        } else {
            //if no match is found push a false value into the noMatchArr
            noMatchArr.push(false);
        }
    }

    winState(hiddenWord);
    addCount(hiddenWord, noMatchArr);

}


//iterate through evalArr = if all items are true; you win
function winState(evalArr, countVic = winCount, lettersLeft = totalLetters) {

    evalArr.forEach(checkWin);

    function checkWin(item){
      if (item === true) {
          countVic++;
          lettersLeft--; 
      } 
      return countVic; 
    }
  
    console.log(countVic + " Count to Victory", lettersLeft + " Letters left");
  
}

//addCount evaluates the amount of guesses a players has
//and if a user loses the game
function addCount(matchArr = hiddenWord,  noLetterMatch = noMatchArr, turnsUsed = turnCount) {


    console.log(matchArr);
    console.log(noLetterMatch);

    if (matchArr.length === noLetterMatch.length) {

        turnsUsed++;
        noLetterMatch = [];
        console.log(turnsUsed);
    }

   

    //if the amount of true doesn't equal the amount of available letters 
    //then don't add count 
    //if the amount of howdy's DOES equal the amount of available letters 
    //then no matches were found add to count; 
    //everytime there is a match do

}




















