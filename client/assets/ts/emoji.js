import { createPopup } from 'picmo';

const trigger = document.querySelector('.chat-emoji');

const picker = createPopup({
  // picker options go here
}, {
    referenceElement: trigger,
    triggerElement: trigger
});