// Import styles
import './main.scss';

/** Fixed height issues on some browsers */
const fixHeight = () => {
  const bodyEl = document.querySelector('body') as HTMLBodyElement;
  bodyEl.style.minHeight = `${window.innerHeight}px`;
};
fixHeight();

/** Click/Hover to rotate avatar */
const avatarRotate = () => {
  const avatarEl = document.querySelector('.me .avatar') as HTMLImageElement;
  let rotating = false;
  let timer = null as null | number;

  const doRotate = () => {
    // If avatar is rotating, nothing to do
    if (rotating) {
      return;
    }

    rotating = true;
    avatarEl.style.transition = 'all 0.75s';
    avatarEl.style.transform = '';
    avatarEl.style.transform = 'rotate(1turn)';

    // After 750ms, the rotation should finish
    setTimeout(() => {
      avatarEl.removeAttribute('style');
      rotating = false;
    }, 750);
  };

  avatarEl.addEventListener('click', () => {
    doRotate();
  });

  avatarEl.addEventListener('mouseenter', () => {
    // Wait 500ms to start rotation
    timer = setTimeout(() => {
      doRotate();
    }, 500);
  });

  avatarEl.addEventListener('mouseleave', () => {
    // If the mouse leaves, stop waiting
    if (timer) {
      clearTimeout(timer);
    }
  });
};
avatarRotate();
