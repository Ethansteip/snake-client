const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.0.41",
    port: "50541"
  });

  // When connecting to the local snake server, print a message to the client.
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