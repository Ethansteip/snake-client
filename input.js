
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
      connection.write("Move: up");
    }
    // If user presses "a", write "Move: up".
    if (key === 'a') {
      connection.write("Move: left");
    }
    // If user presses "s", write "Move: up".
    if (key === 's') {
      connection.write("Move: down");
    }
    // If user presses "d", write "Move: up".
    if (key === 'd') {
      connection.write("Move: right");
    }
  });
};

module.exports = { setupInput };