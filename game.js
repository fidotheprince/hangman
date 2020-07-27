
function selectWord() {

    //randomly select a word 
    //us math to access index, display string at that index
    //number of letters rendered on hmtl 
    //return length of word -> passed into -> hiddenWord()

    var wordBank = [ "cat", "hat", "bat", "spicy"];
    var wordIndex = Math.floor(Math.random() * wordBank.length);
    var lengthOfWord = wordBank[wordIndex].length;

    document.getElementById("numOfLetters").innerHTML = "You word has " + lengthOfWord + " letters!";
    
    return lengthOfWord;

}

function hiddeWord() {
    //return word to html represented by underscores
    console.log(lengthOfWord);

}








