
function selectWord() {

    //randomly select a word 
    //us math to access index, display string at that index
    //number of letters rendered on html 

    const wordBank = [ "CAT", "HAT", "BAT", "SPICY"];

    let wordIndex = Math.floor(Math.random() * wordBank.length);
    let selectedWord = wordBank[wordIndex];
    //document.getElementById("numOfLetters").innerHTML = "You word has " + selectedWord.length + " letters!";
    let gameWordArr = selectedWord.split("");
    // gameWordArr.forEach(makeUnder);

    // function makeUnder(letter) {
    //     var docTag = document.createElement('span');
    //     docTag.innerHTML = " _ ";
    //     document.body.appendChild(docTag);
    // }

    return gameWordArr;

}



let gameWord = selectWord();
console.log(gameWord);

function restartGame() {
    location.reload();
}

function checkValue(letter) {
    console.log(letter)
}

console.log(selectWord.word);





// is the letter selected by the user 
// also a letter in the secret word 
// if so, print yes, if no, print no 






   









