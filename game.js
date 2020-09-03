
function VisualHandler() {

    this.letterBlanks = function (obj) {

        let arrToStr = [];

        for (const letterProp in obj) {

            if(obj[letterProp] === true) {
                arrToStr.push(letterProp);
            } else if(obj[letterProp] === false) {
                arrToStr.push(" _ ");
            }

            document.getElementById('show').innerHTML = arrToStr.join(" ");
          
        }     
     };

     this.visualOutcome = function(win, word) {


        if (win === true) {
            document.getElementById("showTwo").innerHTML = "YOU WIN";
        } else if (win === false) {
            document.getElementById("show").innerHTML = word.join(" ");
            document.getElementById("showTwo").innerHTML = "YOU LOSE";
        }
    };

    this.dispLetterCount = function(num) {
        document.getElementById("dispTotalLett").innerHTML = "Letters: " + num;
    }

    this.bodyParts = function(arr) {
        let count = arr.length;

        if(count > 0 && count < 2) {
            document.getElementById("rope").innerHTML = "<img src='images/rope.png'/>";
        } else if(count > 1 && count < 3) {
            document.getElementById("head").innerHTML = "<img src='images/head.png'/>";
        } else if(count > 2 && count < 4) {
            document.getElementById("torso").innerHTML = "<img src='images/torso.png'/>";
        } else if (count > 3 && count < 5) {
            document.getElementById("legs").innerHTML = "<img src='images/legs.png'/>";
        } else if (count > 4 && count < 6) {
            document.getElementById("feet").innerHTML =  "<img src='images/feet.png'/>";
        } 
    }
} 

//these function help construct the object model to be rendered in the VisualHandler 
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

    let gameHud = new VisualHandler();
    const wordBank = [ 
        "CAT", "HAT", "BAT", "WATER", 
        "SPICY", "BORN", "BIRTH", "APEX",
        "FRESH", "STRENGTH", "FACTS", "TRUE",
        "DOVE", "POWERFUL", "CHAMPION", "FALSE",
        "FAIR", "NOBLE", "PRINCE", "BEST", 
        "FIRST", "PODIUM", "CROWN", "TECHNO", "XMEN"
        ];
    let wordIndex = Math.floor(Math.random() * wordBank.length);
    let selectedWord = wordBank[wordIndex];
    let gameWordArr = selectedWord.split("");
    gameHud.dispLetterCount(gameWordArr.length);

    return gameWordArr;

}


function compareValue(
    inputLetter, 
    hiddenWord = gameWord, 
    guessBank = guesses, 
    winCount = winArr, 
    wordObj = sortedObj) {
    
    document.getElementById(inputLetter).style.display = "none";

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

    renderResult = new VisualHandler();
    renderResult.bodyParts(guessBank);

    if (guessBank.length === 5) {
    
        renderResult.visualOutcome(false, hiddenWord);

    }
    
    if( winCount.length === hiddenWord.length) {
        renderResult.visualOutcome(true, hiddenWord);

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




    

