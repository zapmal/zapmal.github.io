const title = document.querySelector('.header');
const pressed = [];
const secretCode = 'ameliabestgirl';

window.addEventListener('keyup', e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    title.textContent = 'Haha, you found the code!';

    setTimeout(() => {
      title.textContent = 'Hello. 👋';
    }, 5000);
  }
});