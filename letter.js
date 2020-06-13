//constructor function that takes in a letter
function Letter(letter) {
  //a string value that stores the underlying character for the letter
  this.letter = letter;
  //a boolean value that stores whether that letter has been guessed yet
  this.guessed = false;

  //function that returns the underlying character if the letter has been guessed, or a placeholder(like an underscore) if the letter has not been guessed
  // use toString - js will call that function automatically whenever casting that object to a string
  this.toString = function () {
    //user guessed incorrectly letter return placeholder (underscore)
    if (this.guessed === false) {
      return "_";
    } else {
      //user guessed correctly return the letter they guessed
      return this.letter;
    }
  };

  //function that takes a character as an argument and checks it agains the underlying character, updating the stored boolean value to true if it was guessed correctly
  this.letterCheck = function (guess) {
    //check if guess is true then change this.guessed value to true
    if (guess === this.letter) {
      this.guessed = true;
      return true;
    }
  };
}
