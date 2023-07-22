import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import styles from "./RightContainer.module.css";
import Skills from "./Skills/Skills";

function RightContainer() {
  return (
    <div className={styles.wrapper}>
      <Contacts />
      <Skills />
      <Footer />
    </div>
  );
}
export default RightContainer;
