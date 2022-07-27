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


io.on('connection', (socket: any) => {
    socket.on('chat message', (data: any) => {
        io.emit('chat message', {
            message: data.message,
        });
    });
});


http.listen(3000, () => {
    console.log("Start");
});