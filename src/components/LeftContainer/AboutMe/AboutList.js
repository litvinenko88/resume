import styles from "./AboutList.module.css";

function AboutList(props) {
  return (
    <li className={styles.box}>
      <i className="bi bi-caret-right-fill"></i>
      <p>{props.text}</p>
    </li>
  );
}

export default AboutList;
