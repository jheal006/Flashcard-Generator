var inquirer = require('inquirer');
var ClozeCard = require('./ClozeCard.js');

//Display Question
var question = process.argv[2];
var guess  = process.argv[3];

var lineBreak = "=========================";


//Array of questions

var newQuestions = [
  ["Barbarossa was the German code name given to the invasion of the Soviet Union", "Barbarossa"],
  ["George Washington was the name of the first President of the United States", "George Washington"]
]


var operation = new ClozeCard("Barbarossa was the German code name given to the invasion of the Soviet Union during World War II", "Barbarossa");

var crusade = new ClozeCard("Lionheart was the nickname given to King Richard I of England", "Lionheart");

//Display front portion of flashcard

inquirer.prompt([
  {
    name: "Operation",
    message: operation.partial + "\n Answer: ",
    validate: function(answer){
      //If user Input is Correct / Matches Cloze value, display Yes and the full text.
      if (answer == operation.cloze){
        return console.log("\n YES that is Correct\n--------");
      } else {
      //If user Input is Correct / Matches Cloze value, display Yes and the full text.
        return console.log("\n No, the correct answer is : \n---------" + operation.cloze);
      }
    }
  },

  {
    name: "Crusade",
    message: crusade.partial + "\n Answer: ",
    validate: function(answer){
      //If user Input is Correct / Matches Cloze value, display Yes and the full text.
      if (answer === crusade.cloze){
        return console.log("\n YES that is Correct \n================")
      } else {
      //If user Input is Correct / Matches Cloze value, display Yes and the full text.
        return console.log('\n No, the correct answer is:' + crusade.cloze)
      }
    }
  },


]);




//If user Input is Incorrect / Does not match CLoze value, display No and reveal the Cloze text and full text.



//
// var operation = new ClozeCard(newQuestions[0][0],newQuestions[0][1]);
//
// console.log(operation.text);
