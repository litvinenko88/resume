import styles from "./AboutList.module.css";
import Square from "../../UI/Square";

function AboutList(props) {
  return (
    <li className={styles.box}>
      <Square />
      <p>{props.text}</p>
    </li>
  );
}

export default AboutList;
