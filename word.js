//import letter.js file
var Letter = require("./letter.js");

//constructor func 'Word' that depends on the Letter constructor.  This is used to create an object representing the current word the user is attempting to guess. 
function Word(word) {

//an array of 'new' Letter objects representing the letters of underlying word
 this.wordArray = [];

//a func that returns a string representing the word. This should call the function on each letter object (the first function defined in letter.js) that displays the character or an underscore and concatenate those together.
this.toString = function ()

//a func that takes a character as an argument and call the guess func on each letter object(the second funtion defined in letter.js)

}

//export this file to index.js
module.exports = Word;