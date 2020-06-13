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

//Randomly selects a word and uses the Word constructor to store it
let randomIdx = Math.floor(Math.random() * wordBank.length);
let randomWord = new Word(wordBank[randomIdx]);
console.log(randomWord.displayWord());
//console.log(new Word(randomWord))

//Prompts the user for each guess and keeps track of the user's remaining guesses
