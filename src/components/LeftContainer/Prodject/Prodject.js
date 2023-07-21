import Heading from "../../UI/Heading";
import styles from "./Prodject.module.css";
import React from "react";

function Prodject() {
  return (
    <React.Fragment>
      <Heading heading="Мой проекты" />

      <div className="wrapper">
        <div className={styles["container-slider"]}>
         
        </div>
      </div>
    </React.Fragment>
  );
}

export default Prodject;
