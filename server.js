const express = require("express");
const server = express();
;

server.use(express.json());


server.get('/',(req,res) => {
    res.status(200).json({message: "NODE AUTH 2 PROJECT"})
})
module.exports = server;
