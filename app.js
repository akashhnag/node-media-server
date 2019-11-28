
//without expresss
// var http = require('http'),
//     ms = require('mediaserver');

// http.createServer(function (req, res) {

//     ms.pipe(req, res, "video.mp4");

// }).listen(3000, '127.0.0.1');

//with express
const express = require('express');
const ms = require('mediaserver');

const app = express();

app.get("/", (req, res) => {
    ms.pipe(req, res, "video.mp4");
    console.log(ms.mediaTypes);

})

app.listen(3000, (req, res) => {
    console.log('listening to 3000....');
})
