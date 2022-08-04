const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
app.get('/', (req, res) => {
    res.sendFile((path.join(__dirname, '../client', '/index.html')));
});
app.use('/dist', express.static((path.join(__dirname, '..', 'dist'))));
app.use(express.static((path.join(__dirname, '..', 'client', 'assets', 'style'))));
io.on('connection', function (socket) {
    socket.on("newuser", function (username) {
        socket.broadcast.emit("update", username + "присоединился(ась) к чату");
    });
    socket.on("exituser", function (username) {
        socket.broadcast.emit("update", username + "покинул(а) чат");
    });
    socket.on("chat", function (message) {
        socket.broadcast.emit("chat", message);
    });
});
http.listen(3000, () => {
    console.log("Start");
});
