import styles from "./InformationList.module.css";
import Square from "../../UI/Square";

function InformationList(props) {
  return (
    <li className={styles.box}>
      <i className="bi bi-caret-right-fill"></i>
      <p>{props.text}</p>
    </li>
  );
}
export default InformationList;
