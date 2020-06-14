//import word.js file
var Word = require("./word.js");
//import inquirer
var inquirer = require("inquirer");

//The file containing the logic for the course of the game, which depends on Word.js and:
let wordBank = [
  "elsa",
  "belle",
  "cinderella",
  "ariel",
  "jasmine",
  "aurora",
  "tiana",
  "rapunzel",
  "anna",
  "pocahontas",
  "mulan",
];

//Global variables
let guesses;
let pickedWords;
let word;
let pickedWord;

//Initial prompt for user to play game
function prompt() {
  pickedWords = [];
  console.log("Hello, and welcome to Word Guess with Disney Princesses!");
  console.log("------------------------------------------");
//function for game to start
  playGame();
}

function playGame() {
  pickedWord = "";
  guesses = 15;
  if (pickedWords.length < wordBank.length) {
    pickedWord = getWord();
  } else {
    // WIN CONDITION
    console.log("You know your Disney Princesses, Congratulations!");
    continuePrompt();
  }
  if (pickedWord) {
    word = new Word(pickedWord);
    word.displayWord();
    makeGuess();
  }
}

//Randomly selects a word and uses the Word constructor to store it
function getWord() {
  let rand = Math.floor(Math.random() * wordBank.length);
  let randomWord = wordBank[rand];
  if (pickedWords.indexOf(randomWord) === -1) {
    pickedWords.push(randomWord);
    return randomWord;
  } else {
    return getWord();
  }
}

function makeGuess() {
  let checker = [];
  inquirer
    .prompt([
      {
        name: "guessedLetter",
        message:
          word.displayWord() +
          "\nGuess a letter!" +
          "\nGuesses Left: " +
          guesses,
      },
    ])
    .then((data) => {
      word.wordArray.forEach((letter) => {
        letter.letterCheck(data.guessedLetter);
        checker.push(letter.toString());
      });
      if (guesses > 0 && checker.indexOf("_") !== -1) {
        guesses--;
        if (guesses === 0) {
          console.log("YOU RAN OUT OF GUESSES! GAME OVER.");
          continuePrompt();
        } else {
          makeGuess();
        }
      } else {
        console.log("CONGRATULATIONS! YOU GOT THE WORD!");
        console.log(word.displayWord());
        playGame();
      }
    });
}

function continuePrompt() {
  inquirer
    .prompt([
      {
        name: "continue",
        type: "list",
        message: "Would you like to play again?",
        choices: ["Yes", "No"],
      },
    ])
    .then((data) => {
      if (data.continue === "Yes") {
        prompt();
      } else {
        console.log("Thanks for playing!");
      }
    });
}

prompt();



//Prompts the user for each guess and keeps track of the user's remaining guesses
