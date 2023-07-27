import styles from "./ExperienceList.module.css";
function ExperienceList(props) {
  return (
    <li className={styles["conteiner-text"]}>
      <div className={styles["container-time"]}>
        <i className="bi bi-caret-right-fill"></i>
        <p className={styles["text-time"]}>
          {props.year[0]} <br /> {props.year[1]}
        </p>
      </div>

      <div className={styles["container-experience"]}>
        <h3 className={styles["headign-experience"]}>{props.locus}</h3>
        <p className={styles.post}>{props.post}</p>
        <p className={styles["experience-text"]}>{props.description}</p>
      </div>
    </li>
  );
}
export default ExperienceList;
