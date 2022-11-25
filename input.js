/*
* input.js - handles all the user input for the snake game.
*/


// Import commands from contants
const { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, SAY_ZOOM, SAY_SNEK } = require("./constants");

// Store the actice TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
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
      process.exit();
    }
    // If user presses "W", write "Move: up".
    if (key === 'w') {
      connection.write(MOVE_UP);
    }
    // If user presses "a", write "Move: up".
    if (key === 'a') {
      connection.write(MOVE_LEFT);
    }
    // If user presses "s", write "Move: up".
    if (key === 's') {
      connection.write(MOVE_DOWN);
    }
    // If user presses "d", write "Move: up".
    if (key === 'd') {
      connection.write(MOVE_RIGHT);
    }
    // if user presses the i key, print zoom to the server
    if (key === 'i') {
      connection.write(SAY_ZOOM);
    }
    // if user presses the o key, print zoom to the server
    if (key === 'o') {
      connection.write(SAY_SNEK);
    }
  });
};

module.exports = { setupInput };