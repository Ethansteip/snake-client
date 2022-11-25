/*
* Snake Game - building a snake game using TCP and Nodes "Net" library.
*/
 
 
/*
*
* Function Name - and a brief description of what it does
*
* @param {string} argument name - information it holds
* @param {string} argument name - information it holds
*
*/

const net = require("net");
const { stderr } = require("process");
const { conn } = require('./client.js');

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);


  return stdin;
};

// Handling User Input
const handleUserInput = function() {
  process.stdin.on('data', (key) => {
    // If user hits ctrl + C, end the program.
    if (key === '\u0003') {
      console.log("You have exited Snek. Bye for now!");
      //conn.write('Player has left the game');
      process.exit();
    }
  });
};

setupInput();

