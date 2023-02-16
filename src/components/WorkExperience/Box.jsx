import styles from "./Box.module.css";
export default function Box({ project }) {
  return (
    <article className={styles.box}>
      <h3 className={styles.name}>{project.name}</h3>
      <h3 className={styles.company}>{project.company}</h3>

      <p className={styles.summary}>{project.summary}</p>
      <p className={styles.duration}>Duration: {project.duration}</p>

      <ul className={styles.stack}>
        {project.stack.map((tech) => (
          <li key={tech} className={styles.tech}>
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
