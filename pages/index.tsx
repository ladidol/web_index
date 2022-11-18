import Head from 'next/head';
import styles from './index.module.scss';

export default function Index() {
  return (
    <main className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
        <title>CSZongzi</title>
        <meta name="description" content="This is CSZongzi's Homepage | Nice to meet you |•'-'•) ✧" />
      </Head>
      <section className={styles.introduction}>
        <p>
          <span className={styles.hello}>
            <span className={styles.text}>Hello!</span>
            <span className={styles.emoji}>👋🏼</span>
          </span>
        </p>
        <p>I&apos;m CSZongzi.</p>
      </section>
    </main>
  );
}
