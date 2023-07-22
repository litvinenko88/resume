import styles from "./InformationList.module.css";
import Square from "../../UI/Square";

function InformationList(props) {
  return (
    <li className={styles.box}>
      <Square />
      <p>{props.text}</p>
    </li>
  );
}
export default InformationList;
