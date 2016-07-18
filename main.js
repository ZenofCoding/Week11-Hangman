var inquirer = require ('inquirer'); //npm inquirer

inquirer.prompt([ //Starts game via prompt

  {
    type: "list", // list type
    name: "Ready up!", // used to access user input
    message: "Welcome to HANGMAN! Are you ready to play?", // Displays message
    choices: ["Sure", "No Thanks!"] // Choices 
  }

 ]).then(function(answers){ 

  if(answers.start == "Sure"){ 
    
    inquirer.prompt([ 

      {
        type: "list", 
        name: "category", 
        message: "Pick a category", 
        choices: ["Movies", "Games"] 
      }
      ])
    }
  }


