import { io, Socket } from "socket.io-client";


const socket = io();
const messages = document.querySelector('.messages');
const form = document.querySelector('.form');
const input = document.querySelector('.input') as HTMLInputElement | null;
const nameBlock = document.querySelector('.name');



form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (input.value) {
        socket.emit('chat message', {
            message: input.value,
        });
        input.value = '';
    }
});


socket.on('chat message', (data: any) => {
    const item = document.createElement('li');
    item.innerHTML = `${data.message}`;
    messages.appendChild(item);
});

console.log('aaaatest');