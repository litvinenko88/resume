import React from "react";
import Heading from "../../UI/Heading";
import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <React.Fragment>
      <Heading heading="Коротко обо мне" />
      <div className={styles.wrapper}>
        <div className={styles["conteiner-text"]}>
          <p className={styles["text-me"]}>
            В последние годы я работаю по другой специальности. Я думаю, что моя
            настоящая работа рано или поздно приведет меня к застою. Мне
            действительно нужны занятия, в которых я мог бы развиваться в
            течение своей жизни. Поэтому моя цель на сегодняшний день изучить
            Front-end разработку, поменять профессию и найти достойную команду.
          </p>

          <div className={styles["soft-skills-container"]}>
            <h2 className={styles["skills-text"]}>Мой сильные стороны</h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutMe;
