var inquirer = require('inquirer');
var cards = require('./cards.json');
var ClozeCard = require('./ClozeCard.js');
var lineBreak = "==========================================";

//Array of questions

// var operation = new ClozeCard("Barbarossa was the German code name given to the invasion of the Soviet Union during World War II", "Barbarossa");
//
// var crusade = new ClozeCard("Lionheart was the nickname given to King Richard I of England", "Lionheart");

//Display front portion of flashcard


function runFlashCards(){
  // Counter variable to step through Cards array
  var i = 0;
  // Pass card array through Cloze Card Constructor
  var question = new ClozeCard(cards[i].text, cards[i].cloze);
  // console.log(question);

  inquirer.prompt([
      {
        name: "input",
        message: question.partial + "\nAnswer: "
      }
    ]).then(function(answer) {
        if (answer.input == question.cloze) {
          //If user Input is Correct / Matches Cloze value, display Yes and the full text.
          return console.log("\n YES that is Correct\n" + lineBreak);
        } else {
        //If user Input is Correct / Matches Cloze value, display Yes and the full text.
          return console.log("\n No, the correct answer is: " + question.cloze + "\n" + lineBreak);
          console.log("User Input ====== " + answer.input);
          console.log("Answer.cloze ====== " + question.cloze);
        }
        // Increase counter variable
        i++;
    });
};

runFlashCards();
