
function hiddenWord() {

    //randomly select a word 
    //us math to access index, display string at that index

    var wordBank = [ "cat", "hat", "bat", "spicy"];
    var wordIndex = Math.floor(Math.random() * wordBank.length);
    var lengthOfWord = wordBank[wordIndex].length;

    for (i = 0; i <= lengthOfWord; i++) {

        console.log( lengthOfWord[i] = "-")
        
    }
}





