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

// Imports Node's Net library.
const { connect } = require("./client.js");
const net = require("net");
// imports Node's process Library.
const { stderr } = require("process");
// imports the connection function from client.js
const { conn } = require('./client.js');
// Imports the setupINput function in input.js
const { setupInput } = require('./input.js');

console.log("Conecting ...");
connect();

setupInput();

