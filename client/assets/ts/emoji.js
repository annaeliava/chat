import { createPicker } from "picmo";

console.log('working');

const container = document.querySelector('.pickerContainer');
const btn = document.getElementById('btn-emoji');

const picker = createPicker({
  rootElement: container
});

picker.addEventListener('emoji:select', event => {
  console.log('Emoji selected:', event.emoji);
  const message = document.getElementById('message-input');
  message.innerText = event.emoji;
});

btn.onclick = function(){
  const p = document.getElementById('emojiPicker');
  if(p.style.display === "none"){
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
};
