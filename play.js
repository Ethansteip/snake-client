/*
* play.js - launches and connects to the Snek game.
*/

const { connect } = require("./client.js");
// Imports the setupINput function in input.js
const { setupInput } = require('./input.js');

console.log("Conecting ...");
setupInput(connect());

