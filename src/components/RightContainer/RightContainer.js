import NavSatet from "../../context/NavState";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import styles from "./RightContainer.module.css";
import Skills from "./Skills/Skills";
import React from "react";
import MainMenu from "../Hamburger/MainMenu";

function RightContainer() {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <Contacts />
        <Skills />
        <Footer />
      </div>
    </React.Fragment>
  );
}
export default RightContainer;
