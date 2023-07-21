import styles from "./LeftContainer.module.css";
import Person from "./Person/Person";
import AboutMe from "./AboutMe/AboutMe";
import Prodject from "./Prodject/Prodject";
import Experience from "./Experience/Experience";

function LeftContainer() {
  return (
    <div className={styles.wrapper}>
      <Person />
      <AboutMe />
      <Prodject />
      <Experience />
    </div>
  );
}
export default LeftContainer;
