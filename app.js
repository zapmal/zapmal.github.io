const title = document.querySelector('.header');
const authorText = document.querySelector('.author');
const pressed = [];

const secretCode = 'pekopeko';
const audio = new Audio('assets/sounds/konpeko.mp3');

window.addEventListener('keyup', e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    title.textContent = 'Haha, you found the code!';
    authorText.textContent = 'AH↓HA↑HA↑HA↑HA↑';

    audio.currentTime = 0;

    audio.play();

    setTimeout(() => {
      title.textContent = 'Hello. 👋';
      authorText.textContent = 'My name is Manuel Zapata.'
    }, 10000);
  }
});