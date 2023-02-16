import styles from "./Education.module.css";

export default function Education({ other }) {
  return (
    <section className={styles.container}>
      {other.map((other) => (
        <div key={other.id}>
          {other.name && <h2 className={styles.title}>{other.name}</h2>}
          <article className={styles.box}>
            <time className={styles.duration}>{other.duration}</time>
            <h3 className={styles.major}>{other.major}</h3>
            <p className={styles.place}>{other.place}</p>
          </article>
        </div>
      ))}
    </section>
  );
}
