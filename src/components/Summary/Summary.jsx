import styles from "./Summary.module.css";

export default function Summary({ fullName, jobTitle }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.fullName}>{fullName}</h1>
      {/* <p className={styles.jobTitle}>{jobTitle}</p> */}
      <div className={styles.content}>
        <div className={styles.content__container}>
          <p className={styles.content__container__text}>Hello, I'm </p>
          <ul className={styles.content__container__list}>
            <li className={styles.content__container__list__item}>
              project manager!
            </li>
            <li className={styles.content__container__list__item}>
              developer!
            </li>
            <li className={styles.content__container__list__item}>designer!</li>
            <li className={styles.content__container__list__item}>
              photographer!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
