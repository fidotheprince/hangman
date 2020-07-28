
function selectWord() {

    //randomly select a word 
    //us math to access index, display string at that index
    //number of letters rendered on hmtl 

    var wordBank = [ "cat", "hat", "bat", "spicy"];

    var wordIndex = Math.floor(Math.random() * wordBank.length);
    var selectedWord = wordBank[wordIndex];

    document.getElementById("numOfLetters").innerHTML = "You word has " + selectedWord.length + " letters!";

    //e/c letter in selectedWord is split into an individual string item 
    //& is set to it's own array 

    var splitWord = selectedWord.split("");

    //render word in html represented by underscores 

    function makeUnder(letter) {
        var docTag = document.createElement('span');
        docTag.innerHTML = " __ ";
        document.body.appendChild(docTag);
    }

    splitWord.forEach(makeUnder);

}








