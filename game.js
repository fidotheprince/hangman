//game.js ONLY handles the logic of the game 
function selectWord() {

    //randomly select a word 
    //us math to access index, display string at that index

    const wordBank = [ "CAT", "HAT", "BAT", "SPICY", "CCC"];

    let wordIndex = Math.floor(Math.random() * wordBank.length);
    let selectedWord = wordBank[wordIndex];
    let gameWordArr = selectedWord.split("");

    return gameWordArr;

}

let gameWord = selectWord();
let totalLetters = gameWord.length;
console.log(gameWord, totalLetters);



//evaluated array has to be held globally 

let evalArr = [];

function compareValue(userLetter, hiddenWord = gameWord ) {
    //iterate through existing array to compare input
    for (let i = 0; i <= hiddenWord.length; i++) {
        let hiddenLetter = hiddenWord[i];

        if(userLetter == hiddenLetter) {
            evalArr.push(userLetter);
        } 
    }

    console.log(evalArr);
    //and index of hiddenWord
    //determine a WIN or a LOSS potentially in this function
}

function restartGame() {
    location.reload();
}


//let evalArr = gameWord.map(function());

/*have function return value to new array if yes*/

//maybe this array has to be held globablly
//no just on the instance of letter
// function checkValue(guessedLetter, word = gameWord) {

//     word.forEach(evalState);

//     function evalState(hiddenLetter) {
//         if (hiddenLetter == guessedLetter) {
//             let evalArray = [];
//             evalArray.push(hiddenLetter);
//         }
//     }
// }



   









