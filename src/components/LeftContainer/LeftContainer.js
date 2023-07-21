import styles from "./LeftContainer.module.css";
import Person from "./Person/Person";
import AboutMe from "./AboutMe/AboutMe";

function LeftContainer() {
  return (
    <div className={styles.wrapper}>
      <Person />
      <AboutMe />
    </div>
  );
}
export default LeftContainer;
