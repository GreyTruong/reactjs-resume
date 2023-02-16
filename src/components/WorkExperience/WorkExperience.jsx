import Box from "./Box";
import styles from "./WorkExperience.module.css";

export default function WorkExperience({ projects }) {
  return (
    <section className={styles.container}>
      <div className={styles.columnCard}>
        {projects.map((project) => (
          <Box key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
