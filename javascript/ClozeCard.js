//Create a Cloze Card Constructor Function
//ClozeCard function displays a partial potion of the text.

function ClozeCard(text, cloze){
  // The text of the questions to be asked by the flashcard
  this.text = text;
  // The cloze portion, will hold the answer to the flashcard
  // without yet displaying it.
  this.cloze = cloze;
  this.partial = text.replace(this.cloze, "...");
  // console.log(this.text, this.cloze, this.partial)
}

module.exports = ClozeCard;
