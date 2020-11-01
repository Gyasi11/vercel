import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    <div className={styles.hero}>
        <figure id={styles.bgImage}>
        <img src="/laptop-on-counter.jpg" />
        <figcaption>
          <h1>Gyasi-Linje</h1>
          <p>Developer + Content Creator</p>
        </figcaption>
        </figure>
</div>
    </div>
  )
}
