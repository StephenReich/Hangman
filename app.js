(function(){
  var app = angular.module('Hangman', []);

  app.controller('WordCtrl', function(){
    generateRandomWord();
    this.gameStart = generateRandomWord();
    this.word = updateWord();
    this.num = updateTries();
    this.wrong = updateErrors();
    this.run = function(){
      $('#btnEnter').toggleClass("buttonClicked");
      guess = getInput();
      checkInput(guess);
      this.answer = checkAnswer();
      updateWord();
      console.log("Errors: " + errorsRemaining);
      this.word = updateWord();
      this.num = updateTries();
      this.wrong = updateErrors();
    }
  });

})();
