var inquirer = require('inquirer');
var cards = require('./cards.json');
var ClozeCard = require('./ClozeCard.js');
var lineBreak = "==========================================";

// Counter variable to step through Cards array
var i = 0;

function runFlashCards(){
  // Pass card array through Cloze Card Constructor
  var question = new ClozeCard(cards[i].text, cards[i].cloze);
  // console.log(question);
  if ( i < 5 ) {
    inquirer.prompt([
        {
          name: "input",
          message: question.partial + "\nAnswer: "
        }
      ]).then(function(answer) {
          if (answer.input == question.cloze) {
            //If user Input is Correct / Matches Cloze value, display Yes and the full text.
             console.log("\n YES that is Correct\n" + lineBreak);
          } else {
          //If user Input is Correct / Matches Cloze value, display Yes and the full text.
             console.log("\n No, the correct answer is: " + question.cloze + "\n" + lineBreak);
          }
          // Increase counter variable
          i++;
          runFlashCards();
      });
  } else if ( i = 5 ) {
    console.log('Better crack open the history books!');
  }

};

runFlashCards();
