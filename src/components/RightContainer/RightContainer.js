import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import styles from "./RightContainer.module.css";
import Skills from "./Skills/Skills";
import React from "react";

function RightContainer() {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <HamburgerMenu className={styles.hamburger}></HamburgerMenu>
        <Contacts />
        <Skills />
        <Footer />
      </div>
    </React.Fragment>
  );
}
export default RightContainer;
