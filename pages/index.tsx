import { Noto_Color_Emoji } from '@next/font/google';
import Head from 'next/head';
import styles from './index.module.scss';

const emoji = Noto_Color_Emoji({ weight: '400', subsets: ['emoji'] });

export default function Index() {
  return (
    <main className={styles.container}>
      <Head>
        <title>CSZongzi</title>
        <meta name="description" content="This is CSZongzi's Homepage | Nice to meet you |•'-'•) ✧" />
      </Head>
      <section className={styles.introduction}>
        <p>
          <span className={styles.hello}>
            <span className={styles.text}>Hello!</span>
            <span className={`${styles.emoji} ${emoji.className}`}>👋🏼</span>
          </span>
        </p>
        <p>I&apos;m CSZongzi.</p>
      </section>
    </main>
  );
}
