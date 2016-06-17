
var guess = "";
var word = "";
var wordArray = [];
var currentArray = [];
var wrongArray = [];
var errorsRemaining = 6;
var answer = false;

var generateRandomWord = function(){
  //temporary array of words
  var wordList = ["STUFF", "EXTRAVAGANT", "ANACONDA", "PERPETUAL", "SASSY", "FANTASTIC", "CASTLE", "PANDA", "PRISON", "GLASSES", "PUPPY", "ELEPHANT", "OFFICE", "LAPTOP", "COMPUTER", "KEYBOARD", "MOUSE", "DESK"];
  //generate random index to return word value
  var length = wordList.length;
  var selected = wordList[Math.floor((Math.random() * length))];
  console.log(selected);
  word = selected;
  wordArray = [];
  for(i in word){ //replace each letter with a placeholder for the user to see how many spaces exist
    currentArray[i] = "_";
    wordArray[i] = word.charAt(i);
  }
  return word;
}

//get user input from text box after clicking "TRY" button
var getInput = function(){
  var guessed = document.getElementById("tbxInput").value;
  document.getElementById("tbxInput").value = ""; //clear text box after clicking try
  return guessed;
}

//check if input is in word or is word
var checkInput = function(g){
  if(allLetters(g) == true){ //check if input is an A-Z character
    var gUpper = g.toUpperCase();
    var clone = currentArray.slice(0);
    if(gUpper.length == 1){ //if input is 1 character, check if it exists in the word
      var foundExists = false;
      for(i in currentArray){
        if(gUpper == currentArray[i]){
          alert("You already guessed that!");
          foundExists = true;
          break;
        }
      }
      for(i in wordArray){ //replace every placeholder with guessed letter (if correct) in the correct index
        if(gUpper == wordArray[i]){
          currentArray[i] = gUpper;
        }
      }

      if(clone.toString() == currentArray.toString()){ //if the temp variable was not changed, no letter was found
        var foundLetter = false;

        if(wrongArray.length >=1)
        {
          for(i in wrongArray)
          {
            if(wrongArray[i] == g.toUpperCase().toString())
            {
              alert("You already guessed that!");
              foundLetter = true;
              break;
            }
          }
        }
        if(foundLetter == false && foundExists == false)
        {
          answer = false;
          errorsRemaining--;
          wrongArray.push(g.toUpperCase());
        }
      }
      else{
        answer = true;
        console.log(currentArray);
      }
      var matched = true;
      for(i in wordArray)
      {
          if(wordArray[i].toString() !== currentArray[i].toString())
          {
            matched = false;
            break;
          }
      }
      if(matched == true){
        updateWord();
        alert("CONGRATULATIONS! YOU WIN!");
        gameOver();
      }

    }
    else if(gUpper.length == word.length){ //if the input has the same number of characters as the word, check to see if it is correct
      if(gUpper == word){
        for(i in word){
          currentArray[i] = word.charAt(i);
        }
        console.log(currentArray);
        updateWord();
        alert("YOU GUESSED IT! YOU WIN!");
        gameOver();
      }
      else {
        errorsRemaining--;
        answer = false;
        alert("INCORRECT! That is not the word.");
      }
    }
    else {
      alert("ERROR: INVALID INPUT.");
    }
  }
  else {
    alert("ERROR: INVALID INPUT. Must be A-Z characters only!")
  }

  if(errorsRemaining == 0){
    updateWord();
    alert("GAME OVER: You ran out of tries. The word was " + word + ".")
    gameOver();
  }
  return currentArray;
}

var allLetters = function(input){
  var letters = /^[A-Za-z]+$/;
   if(input.match(letters))
     {
      return true;
     }
   else
     {
     return false;
     }
}

var updateWord = function(){
  return currentArray;
}

var updateTries = function(){
  return errorsRemaining;
}

var updateErrors = function(){

  return wrongArray;
}

var checkAnswer = function(){
  return answer;
}

var gameOver = function(){
  errorsRemaining = 6;
  wrongArray = [];
  currentArray = [];
  generateRandomWord();
  updateWord();
  updateTries();
  updateErrors();
}

$(document).ready(function(){
  $('#correct').click(function(){ //animation for check mark when input is correct
    $('#correct').toggleClass("active")
  });

  $('#wrong').click(function(){ //animation for "x" when input is incorrect
    $('#wrong').toggleClass("active")
  });
});
