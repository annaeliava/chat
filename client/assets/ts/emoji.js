//Emoji

import { createPicker, EmojiPicker } from "picmo"; 

const container = document.querySelector('.pickerContainer');
const btn = document.getElementById('btn-emoji');
const message = document.querySelector('#message-input');
const send = document.querySelector('#send-message');

const picker = createPicker({
  rootElement: container
}); //creating Emoji Picker

picker.addEventListener('emoji:select', event => {
  message.value += event.emoji;
}); //adding emoji

send.addEventListener('click', () =>{
  const p = document.getElementById('emojiPicker');
  p.style.display='none';
}); //picker's closed when we send our message 

btn.onclick = function(){
  const p = document.getElementById('emojiPicker');
  if(p.style.display === "none"){
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
}; //picker's visibility


