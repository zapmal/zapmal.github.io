const image = document.querySelector('.banner');
const title = document.querySelector('.header');
const pressed = [];
const secretCode = 'pekopeko';

window.addEventListener('keyup', e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    image.src = 'assets/images/pekolaugh.jpg';
    title.textContent = 'Nice!';

    setTimeout(() => {
      image.src = 'assets/images/banner.jpg';
      title.textContent = 'Hello. 👋';
    }, 5000);
  }
});