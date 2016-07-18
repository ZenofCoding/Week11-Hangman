var Letter = require("./letter.js");

Word = function(wrd){
  this.word = wrd;
  this.lets = []; // word will be split into an array
  this.found = false;

  this.getLets = function(){
    for(var i = 0; 1 < this.word.length; i++){
      this.lets.push(new Letter(this.word[i]));
    }
  };

  this.FindTheWord = function(){
     this.found = this.lets.every(function(currentLet){
      return currentLet.appear;
     });

     return this.found;
  };

  this.checkIfFound = function(guessLetter) {
    var whatToReturn = 0;

    for(var i = 0; i < this.lets.length; i++) {
      if (this.lets[i].charac == guessLetter){
        this.lets[i].appear = true;
        whatToReturn++;
      }
    }

    return whatToReturn;
  };

  this.wordRender = function() {
    var str = '';

    for(var i=0; i < this.lets.length; i++){
      str += this.lets[i].letterRender();
    }

    return str;
  };
}

module.exports = Word;