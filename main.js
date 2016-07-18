var letter = require("./letter.js");
var Word = require("./word.js")


var game = {
  wordBank:["Serenity", "Tranquility", "Ethereal"],
  guessesRemaining: 10,
  currentWord: null,
  startGame: function(wrd){

    this.currentWord = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
    this.currentWord.getLets();
    this.PromptUser();
  },

  PromptUser: function(){
    var self = this;
       prompt.get(["guessLetter"], function(err, result){
      console.log("You guessed" + result.guessLetter);
      var findHowManyOfUserGuess = self.currentWord.checkIfLetterFound(result.guessLetter);
   


    if (findHowManyOfUserGuess === 0){
      console.log("Sorry!");
      self.guessesRemaining -= 1;
    }else{
      console.log("Good job!");

      if(self.currentWord.didWeFindTheWord()){
        console.log("You Win!");
        return 1;
      }
    }

    console.log("Guesses remaining: " + self.guessesRemaining);
    console.log(self.wordRender.currentWord())
 


    if ((self.guessesRemaining > 0) && (self.currentWord.found == false)){
      self.keepPromptingUser();
    }
    else if(self.guessesRemaining == 0){
      console.log('Better luck next time! ', self.currentWord.word);
    }else{
      console.log(self.currentWord.wordRender());
    }

  });
}

};

game.startGame();