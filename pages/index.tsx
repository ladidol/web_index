import Head from 'next/head';
import Image from 'next/image';

const state = {
  rotating: false,
  timer: null as null | NodeJS.Timer,
};

const doRotate = (avatarEl: HTMLImageElement) => {
  // If avatar is rotating, nothing to do
  if (state.rotating) {
    return;
  }

  state.rotating = true;
  avatarEl.style.transition = 'all 0.75s';
  avatarEl.style.transform = '';
  avatarEl.style.transform = 'rotate(1turn)';

  // After 750ms, the rotation should finish
  setTimeout(() => {
    avatarEl.removeAttribute('style');
    state.rotating = false;
  }, 750);
};

const handleAvatarClick = (e: React.MouseEvent<HTMLImageElement>) => {
  doRotate(e.target as HTMLImageElement);
};

const handleAvatarMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
  // Wait 300ms to start rotation
  state.timer = setTimeout(() => {
    doRotate(e.target as HTMLImageElement);
  }, 300);
};

const handleAvatarMouseLeave = () => {
  // If the mouse leaves, stop waiting
  if (state.timer) {
    clearTimeout(state.timer);
    state.timer = null;
  }
};

export default function Index() {
  return (
    <main className="card">
      <Head>
        <title>CSZongzi</title>
        <meta name="description" content="This is CSZongzi's Homepage | Nice to meet you |•'-'•) ✧" />
      </Head>
      <section className="left">
        <div className="me">
          <Image
            className="avatar"
            src="/avatar.png"
            width={100}
            height={100}
            alt=""
            draggable="false"
            onClick={handleAvatarClick}
            onMouseEnter={handleAvatarMouseEnter}
            onMouseLeave={handleAvatarMouseLeave}
          />
          <span className="nickname">CSZongzi</span>
        </div>
        <div className="links">
          <a href="https://stack.nullptr.zone" target="_self" draggable="false">
            <Image src="/icons/blog.svg" width={24} height={24} alt="" draggable="false" />
            <span>Blog</span>
          </a>
          <a href="https://lab.nullptr.zone" target="_self" draggable="false">
            <Image src="/icons/lab.svg" width={24} height={24} alt="" draggable="false" />
            <span>Lab</span>
          </a>
          <a href="https://github.com/CSZongzi" target="_self" draggable="false">
            <Image src="/icons/github.svg" width={24} height={24} alt="" draggable="false" />
            <span>GitHub</span>
          </a>
        </div>
      </section>
      <section className="right">
        <p>Nice to meet you</p>
        <p>|•&apos;-&apos;•) ✧</p>
      </section>
    </main>
  );
}
