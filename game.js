
function VisualHandler() {

    
    //make object into an array.join// render dynamically 
    //newObject with state set the instance before it 
    //or remove property and value once matched 
    //I only want one letter to show at a time
    //potential send letter to as an array item and joing the item? 
     //push elements to an array // make array string // and then render array 

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
    
        //if value at letter key is false -> show " _ "
        //else if value at letter key is true -> show " value (e.g. letter)"
        //document.getElementById("show").innerHTML = gameLettersArr.join(" ");
} 

//this only has to sort an object once "key" = letter : "value" = boolean
//in order to have the object update after every onclick event, we have to keep the state of that object globally 
function orgObject() {
        this.flipKeyValue = function(obj) {
            let newObj = {};
            for(var key in obj) {
                newObj[obj[key]] = false;
            }
            //send to new obj
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


//object passed from here is ObjToDisplay(change this name) -> make word object 
//creat object that switch value to true when there is a match  -> sort object 
//this object passes the object with set values to -> change value and send to be redered 
//your visualHandler 
       

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
//
console.log(sortedObj);




//     //
//     this.guessResult = function(guess) {
//         if (guess == true) {
//             //potential render word in place of array 
//             document.getElementById("testTwo").innerHTML = "You win";
//         } else if (guess = false) {
//             document.getElementById("testTwo").innerHTML = "You lose";
//         }
//     };
// }
