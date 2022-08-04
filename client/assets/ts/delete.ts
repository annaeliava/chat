import { CometChat } from "@cometchat-pro/chat";

let messageId: number = 1;

CometChat.deleteMessage('messageId').then(
    (message: CometChat.BaseMessage) => {
        console.log("Message deleted", message);
    }, (error: CometChat.CometChatException) => {
        console.log("Message delete failed with error:", error);
    }
);