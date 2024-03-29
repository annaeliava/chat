const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.get('/', (req: any, res: any) => {
    res.sendFile((path.join(__dirname, '../client', '/index.html')));
});


app.use('/dist', express.static((path.join(__dirname, '..', 'dist'))));

app.use(express.static((path.join(__dirname, '..', 'client', 'assets', 'style'))));

app.use(express.static((path.join(__dirname, '..', 'client', 'assets', 'icon'))));


io.on('connection', function (socket: any) {
    socket.on("newuser", function (username: any) {
        socket.broadcast.emit("update", username + " присоединился(ась) к чату");
    });
    socket.on("exituser", function (username: any) {
        socket.broadcast.emit("update", username + " покинул(а) чат");
    });
    socket.on("chat", function (message: any) {
        socket.broadcast.emit("chat", message);
    });
});


http.listen(3000, () => {
    console.log("Start");
});

