
function VisualHandler() {

    this.letterBlanks = function (obj) {

        let arrToStr = [];

        for (const letterProp in obj) {
           
            if(obj[letterProp] === true) {
                arrToStr.push(letterProp);
            } else if(obj[letterProp] === false) {
                arrToStr.push(" __ ");
            }

            document.getElementById('show').innerHTML = arrToStr.join(" ");
        }     
     }
} 

function orgObject() {

        this.flipKeyValue = function(obj) {
            let newObj = {};
            for(var key in obj) {
                newObj[obj[key]] = false;
            }
            
            return newObj
        };      
}

function UpdateObjState () {

    this.matchedLetter = function (obj, letter) {
        
        for (letterProp in obj) {
            if (letterProp === letter) {
                obj[letterProp] = true;
            }
        }
            return obj
    }
}

function selectWord() {
   
    const wordBank = [ "CAT", "HAT", "BAT", "SPICY", "CCC", "FOREVER"];
    let wordIndex = Math.floor(Math.random() * wordBank.length);
    let selectedWord = wordBank[wordIndex];
    let gameWordArr = selectedWord.split("");
    return gameWordArr;

}

function compareValue(
    inputLetter, 
    hiddenWord = gameWord, 
    guessBank = guesses, 
    winCount = winArr, 
    wordObj = sortedObj) {

    guessBank.push(inputLetter);
    hiddenWord.forEach(compare);

    function compare(secretLetter) {
        let findInObj = new UpdateObjState();
        let evalObject;
        let showToUser = new VisualHandler();

        if (secretLetter === inputLetter) {
            guessBank.splice(inputLetter, 1);
            winCount.push(inputLetter);
            evalObject = findInObj.matchedLetter(wordObj, inputLetter); 
            showToUser.letterBlanks(evalObject)
            console.log(winCount);
        }
    }

    if (guessBank.length === 7) {
        console.log("you lose");
        console.log("Would you like to play again?")

    }
    
    if( winCount.length === hiddenWord.length) {
        console.log("you win");
        console.log("Would you like to play again?")
    }

}

function restartGame() {
    location.reload();
}


let guesses = [];
let winArr = [];
const gameWord = new selectWord();
let unSortedObj = Object.assign({}, gameWord);
let sort = new orgObject();
let sortedObj = sort.flipKeyValue(unSortedObj);
console.log(sortedObj);




