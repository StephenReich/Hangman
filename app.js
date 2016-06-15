(function(){
  var app = angular.module('Hangman', []);

  app.controller('WordCtrl', function(){
    generateRandomWord();
    this.word = updateWord();
    this.num = updateTries();
    this.wrong = updateErrors();
    this.run = function(){
      $('#btnEnter').toggleClass("buttonClicked");
      guess = getInput();
      checkInput(guess);
      updateWord();
      console.log("Errors: " + errorsRemaining);
      this.word = updateWord();
      this.num = updateTries();
      this.wrong = updateErrors();
    }
  });

})();
