// List Required Nodes / JS files / Variables
var inquirer = require('inquirer');
var cards = require('./cards.json');
var ClozeCard = require('./javascript/ClozeCard.js');
// Decorative Var for Console
var lineBreak = "==========================================";

// Counter variable to step through Cards array
var i = 0;

function runFlashCards(){
  // Pass card array through Cloze Card Constructor
  var question = new ClozeCard(cards[i].text, cards[i].cloze);
  // console.log(question);
  if ( i < cards.length - 1 ) {
    inquirer.prompt([
        {
          name: "input",
          message: question.partial + "\nAnswer: "
        }
      ]).then(function(answer) {
          if (answer.input == question.cloze) {
            //If user Input is Correct / Matches Cloze value, display Yes and the full text.
             console.log("YES that is Correct\n" + lineBreak);
          } else {
          //If user Input is Correct / Matches Cloze value, display Yes and the full text.
             console.log("No, the correct answer is: \n" + question.cloze + "\n" + lineBreak);
          }
          // Increase counter variable
          i++;
          // Use Recursion to call the runFlashCards function again in order to step through the array 
          runFlashCards();
      });
  } else {
    console.log('Better crack open the history books!');
  }
};
// Run FlashCard function
runFlashCards();
