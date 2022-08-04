import moment from "moment";
import { io, Socket } from "socket.io-client";

(function () {
    const app = document.querySelector('.app');
    const socket = io();
    let uname: any;
    app.querySelector(".join-screen #join-user").addEventListener("click", function () {
        let inputTag = app.querySelector(".join-screen #username") as HTMLInputElement;
        let username = inputTag.value;
        if (username.length == 0) {
            return;
        }
        socket.emit("newuser", username);
        uname = username;
        app.querySelector(".join-screen").classList.remove("active");
        app.querySelector(".chat-screen").classList.add("active");
    });

    app.querySelector(".chat-screen #send-message").addEventListener("click", function () {
        let inputText = app.querySelector(".chat-screen #message-input") as HTMLInputElement;
        let message = inputText.value;
        if (message.length == 0) {
            return;
        }
        renderMessage("my", {
            username: uname,
            text: message
        });
        socket.emit("chat", {
            username: uname,
            text: message
        });
        inputText.value = "";
    });

    app.querySelector(".chat-screen #exit-chat").addEventListener("click", function () {
        socket.emit("exituser", uname);
        window.location.href = window.location.href;
    });

    socket.on("update", function (update) {
        renderMessage("update", update);
    });

    socket.on("chat", function (message) {
        renderMessage("other", message);
    });

    function renderMessage(type: any, message: any) {
        let messageContainer = app.querySelector(".chat-screen .messages");
        if (type == "my") {
            const moment = require('moment');
            let now = moment().format('LLL');
            let el = document.createElement("div");
            el.setAttribute("class", "message my-message");
            el.innerHTML =
                `<div class="textmy">
                    <div class="name">Вы</div>
                    <div class="text">${message.text}</div>
                    <div class="date">${now}</div>
                    <button class='deleteButton' id='dltBtn' style='outline:none; cursor:pointer; border: none; background-color: transparent; color: #555; font-size: 12px; margin-top: 6px;'>Удалить</button>

                </div>`;
            messageContainer.appendChild(el);

        } else if (type == "other") {
            const moment = require('moment');
            let now = moment().format('LLL');
            let el = document.createElement("div");
            el.setAttribute("class", "message other-message");
            el.innerHTML =
                `<div class="textother">
                    <div class="name">${message.username}</div>
                    <div class="text">${message.text}</div>
                    <div class="date">${now}</div>
                </div>`;
            messageContainer.appendChild(el);

        } else if (type == "update") {
            let el = document.createElement("div");
            el.setAttribute("class", "update");
            el.innerText = message;
            messageContainer.appendChild(el);
        }
        // scrol chat to end
        messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
    }
})();

console.log('testee');
