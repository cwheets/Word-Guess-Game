var wordArray = [
    "apparel",
    "match",
    "inject",
    "acrid",
    "zesty",
]

var answerArray = []

var userGuessKey = []

var answerEL = document.getElementById("userGuess")

var answerArrayKey  = document.getElementById("wordToGuess")

var remainingEl= document.getElementById("remaining")

var word = wordArray[Math.floor(Math.random() * wordArray.length)]  

var remaining = remainingEl

remaining = 7

remainingEl.textContent = remaining

for (var i = 0; i < word.length; i++) {
    answerArray.push('_')
answerArrayKey.textContent = answerArray
}


console.log(answerArray)
console.log(word)

// when key pressed...
document.onkeyup = function (event) {
   // record user input and set to lower case
    var userGuess = event.key.toLowerCase();
//push content to veiwable source ie the guesskey/ array
    userGuessKey.push(userGuess);
//sending content to id in html page
    answerEL.textContent = userGuessKey;
//check for letter in string or generated word
    if (word.includes(userGuess)){
//loops to identify place of word
        for(var j = 0; j < word.length; j++){
//if the letter is matches ideration of word
            if(userGuess === word[j]){
//set letter to iteration of empty array
                answerArray[j] = word[j];   
//make it visable
                answerArrayKey.textContent = answerArray;


            }
            
        }

    }
    else{
       remaining--
       remainingEl.textContent = remaining
    }

    if(answerArray.join('') === userGuessKey.join('') ){
       alert("you Win") 
    }
    else if(remaining === 0){
        alert("you lose")
    }   
    
    
    
}








