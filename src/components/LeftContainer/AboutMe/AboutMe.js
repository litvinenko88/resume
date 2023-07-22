import React from "react";
import Heading from "../../UI/Heading";
import styles from "./AboutMe.module.css";
import Square from "../../UI/Square";
import AboutList from "./AboutList";

const STRENGTHS_ARRAY = [
  {
    text: "Быстрая адаптация к новым условиям",
  },
  {
    text: "Способность к быстрому усвоению знаний, восприимчивость к помощи другим",
  },
  {
    text: "Умение концентрироваться, многозадачность",
  },
  {
    text: "Доброжелательность, умение находить общий язык, дипломатичность",
  },
  {
    text: "Организаторские способности, готовность брать ответственность за результаты",
  },
];

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
            течение своей жизни и я открыл для себя мир web-разработке. Моя цель
            на сегодняшний день стать полноценным Front-end разработчиком,
            освоить все необходимые технологии поменять профессию и найти
            достойную команду для дальнейшего развития.
          </p>

          <div className={styles["soft-skills-container"]}>
            <h2 className={styles["skills-text"]}>Мой сильные стороны</h2>
            <ul className={styles["container-skills"]}>
              {STRENGTHS_ARRAY.map((item) => (
                <AboutList key={item.text} text={item.text} />
              ))}
            </ul>

            <h2 className={styles["skills-text"]}>Языки</h2>
            <div className={styles["container-skills"]}>
              <div className={styles.box}>
                <Square />
                <p>Русский</p>
              </div>
              <div className={styles.box}>
                <Square />
                <p>Английский А1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutMe;
