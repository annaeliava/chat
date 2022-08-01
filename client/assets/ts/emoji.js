import { createPicker, EmojiPicker } from "picmo";

const container = document.querySelector('.pickerContainer');
const btn = document.getElementById('btn-emoji');
const message = document.querySelector('#message-input');
const send = document.querySelector('#send-message');

const picker = createPicker({
  rootElement: container
});

picker.addEventListener('emoji:select', event => {
  console.log(event.emoji);
  message.value += event.emoji;
});

send.addEventListener('click', () =>{
  const p = document.getElementById('emojiPicker');
  p.style.display='none';
});

btn.onclick = function(){
  const p = document.getElementById('emojiPicker');
  if(p.style.display === "none"){
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
};
