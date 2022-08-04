import { createPicker } from "picmo";

console.log('working');

const container = document.querySelector('.pickerContainer');

const picker = createPicker({
  rootElement: container
});

