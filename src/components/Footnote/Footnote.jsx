import styles from "./Footnote.module.css";

export default function Footnote() {
  return (
    <footer className={styles.container}>
      <a href="./quan.pdf" className={styles.link} download>
        Download this resume.
      </a>
    </footer>
  );
}
