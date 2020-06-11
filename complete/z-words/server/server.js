
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

let word = "";
let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// app.use( function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
//     next();
// });

const io = require("socket.io")(server, {});

io.on("connection", () => {});

server.listen(8000);

let players = []

const updateStatus = () => {

    players.forEach( ob => {
        ob.socket.emit("players", players.length )
    })
    console.log("Players",players.map( c => c.socket.id ))

    // Empty the word if no players connected.
    if( !players.length ) {
        word = "";
    }
}

io.on("connection", (socket) => {
   
    players.push( { socket:socket })

    updateStatus();

    socket.emit("word", word );
 
    socket.on("disconnect", () => {
        players = players.filter( ob => ob.socket.id !== socket.id)
        updateStatus();
    });

    socket.on("letter", (letter) => {

        if(letter === "Backspace") {
            word = word.slice(0, -1);
        } 
        if(alphabet.includes(letter)) {
            word += letter; 
        }

        players.forEach( ob => {
            ob.socket.emit("word", word )
        })
    });

});
