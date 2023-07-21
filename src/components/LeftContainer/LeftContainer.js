import styles from "./LeftContainer.module.css";
import Person from "./Person/Person";
import AboutMe from "./AboutMe/AboutMe";
import Prodject from "./Prodject/Prodject";

function LeftContainer() {
  return (
    <div className={styles.wrapper}>
      <Person />
      <AboutMe />
      <Prodject />
    </div>
  );
}
export default LeftContainer;
