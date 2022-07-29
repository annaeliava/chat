import { createPopup } from '@picmo/popup-picker';

const triggerButton = document.querySelector('.emojiBox');

const picker = createPopup({}, {
    referenceElement: triggerButton,
    triggerElement: triggerButton,
    position: 'top-start'
});

picker.addEventListener('emoji:select', event => {
  console.log('Emoji selected:', event.emoji);
});

triggerButton.addEventListener('click', function() {
  console.log('test');
});