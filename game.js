
function selectWord() {

    //randomly select a word 
    //us math to access index, display string at that index
    //number of letters rendered on html 

    var wordBank = [ "CAT", "HAT", "BAT", "SPICY"];

    var wordIndex = Math.floor(Math.random() * wordBank.length);
    var selectedWord = wordBank[wordIndex];

    document.getElementById("numOfLetters").innerHTML = "You word has " + selectedWord.length + " letters!";

    //e/c letter in selectedWord is split into an individual string item 
    //& is set to it's own array 

    var splitWord = selectedWord.split("");

    //render word in html represented by underscores 
    //pass word (array) into your checkValue 

    function makeUnder(letter) {
        var docTag = document.createElement('span');
        docTag.innerHTML = " __ ";
        document.body.appendChild(docTag);
    }

    splitWord.forEach(makeUnder);

    checkValue(splitWord);

}

function restartGame() {
    location.reload();
}

function checkValue(gameWord, selectedLetter) {
    console.log(gameWord);
    //grab word
    //compare letters in  word to user input
    for (let i = 0; i < gameWord.length; i++) {
        var hiddenLetter = gameWord[i];
        if(hiddenLetter == selectedLetter) {
            console.log("yes");
        } else {
            console.log("no");
        }
    }
    //determine whether or user input is in selectedWord
}








