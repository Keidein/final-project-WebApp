const express = require("express");
var app = express();

var port = 3000;

var server = app.listen(port);

app.use(express.static("./public"));

server.on("listening", () => {
    console.log(`The website is running on localhost:${port}`);
});