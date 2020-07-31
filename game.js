//game.js ONLY handles the logic of the game 
function selectWord() {

    //randomly select a word 
    //us math to access index, display string at that index

    const wordBank = [ "CAT", "HAT", "BAT", "SPICY"];

    let wordIndex = Math.floor(Math.random() * wordBank.length);
    let selectedWord = wordBank[wordIndex];
    let gameWordArr = selectedWord.split("");

    return gameWordArr;

}

let gameWord = selectWord();
console.log(gameWord);

function checkValue(guessedletter, word = gameWord) {

    for (let i = 0; i < word.length; i++) {
        let hiddenLetter = word[i];

        if (hiddenLetter == guessedletter) {
            console.log("correct");
        } else {
            console.log("incorrect")
        }
    }
}

function restartGame() {
    location.reload();
}







// is the letter selected by the user 
// also a letter in the secret word 
// if so, print yes, if no, print no 






   









