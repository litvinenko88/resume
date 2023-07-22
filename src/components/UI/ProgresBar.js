import styles from "./ProgresBar.module.css";

function ProgresBar(props) {
  return (
    <li className={styles.wrapper}>
      <label className={styles.title}>{props.title}</label>
      <div
        className={styles["container-progres"]}
        style={{ width: `${props.completed}%` }}>
        <span className={styles.progres}>{`${props.completed}%`}</span>
      </div>
    </li>
  );
}

export default ProgresBar;
