(function(){
  var app = angular.module('Hangman', []);

  app.controller('WordCtrl', function(){
    generateRandomWord();
    this.word = updateWord();
    this.num = updateTries();
    this.wrong = updateErrors();
    this.run = function(){
      this.word = updateWord();
      this.num = updateTries();
      this.wrong = updateErrors();
    }
  });

})();
