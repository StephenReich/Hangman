(function(){
  var app = angular.module('Hangman', []);
  app.controller('WordCtrl', function(){
    this.gameStart = generateRandomWord();
    this.word = updateWord();
    this.num = updateTries();
    this.wrong = updateErrors();
    this.run = function(){
      $('#btnEnter').toggleClass("buttonClicked");
      guess = getInput();
      checkInput(guess);
      this.answer = checkAnswer();
      console.log("Errors: " + errorsRemaining);
      this.word = updateWord();
      this.num = updateTries();
      this.wrong = updateErrors();
      this.finishedGame = checkFinished();
      console.log(this.finishedGame);
      if(this.finishedGame == "true"){
        console.log("Hello");
        gameOver();
      }
    }
  });
})();
