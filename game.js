//game.js ONLY handles the logic of the game 
function selectWord() {

    //randomly select a word 
    //us math to access index, display string at that index

    const wordBank = [ "CAT", "HAT", "BAT", "SPICY", "CCC", "FOREVER"];

    let wordIndex = Math.floor(Math.random() * wordBank.length);
    let selectedWord = wordBank[wordIndex];
    let gameWordArr = selectedWord.split("");

    return gameWordArr;

}

//determined by body parts in the hang man 1 guess = 1 body part
//evaluated array has to be held globally 
//global state saves in memory every new item added to array 
//since it is the same instance 

let gameWord = selectWord();
let totalLetters = gameWord.length;
let winCount = 0;
console.log(gameWord, totalLetters);




function compareValue(inputLetter, hiddenWord = gameWord) {
    //iterate through existing array to compare input
    for (let i = 0; i <= hiddenWord.length - 1; i++) {
        let hiddenLetter = hiddenWord[i];
        console.log(inputLetter, hiddenLetter);

    //replace match with a boolean statement of true 
        if (inputLetter === hiddenLetter) {
            hiddenWord.splice(i, 1, true);
        } 
    }

    console.log(hiddenWord);
    winState(hiddenWord);

}

//iterate through evalArr = if all items == true; you win
function winState(evalArr, count = winCount) {

  evalArr.forEach(checkWin);

  function checkWin(item){

    if (item === true) {
        count++;
    }
    //winState might be able to handle to L as well
  }

  console.log(count);

}






function restartGame() {
    location.reload();
}








