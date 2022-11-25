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

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541"
  });

  // Print a message to the client as soon as a connection has been made to the server.
  conn.on("connect", (data) => {
    console.log("🐍 Connection Establish - welcome to snek 🐍");
    conn.write("Name: BIR");
  });

  // //Once connected move the snake up.
  // conn.on("connect", (data) => {

  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 500);
  // });


  // When connecting to the local snake server, print a message to the client.
  // Also, send our name to the host server.
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });
  // When disconnecting from the server, print a message to the client.
  // client.on('end', () => {
  //   console.log('disconnected from server');
  // });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};



console.log("Connecting ...");
connect();

module.exports = { connect };