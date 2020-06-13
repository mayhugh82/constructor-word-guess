//constructor function that takes in a letter
function Letter(letter) {
    //a string value that stores the underlying character for the letter
    this.letter = letter;
    //a boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
}