/*
* client.js - connects to the Snek game server.
*/


// Imports Node's Net library.
const net = require("net");
// Import the IP and PORT variables
const { IP, PORT } = require("./constants");

/*
*
* connect - establishes a connection with the game server
*
*
*/

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // Print a message to the client as soon as a connection has been made to the server.
  conn.on("connect", (data) => {
    console.log("🐍 Connection Establish - welcome to snek 🐍");
    conn.write("Name: BIR");
  });
  // When connecting to the local snake server, print a message to the client.
  // Also, send our name to the host server.
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // Return conn object
  return conn;
};

module.exports = { connect };