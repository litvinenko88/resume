import Heading from "../../UI/Heading";
import styles from "./Prodject.module.css";
import React from "react";
import ProdjectList from "./ProdjectList";

import foto_1 from "../../../assets/img/Prodject-1.jpg";
import foto_2 from "../../../assets/img/Prodject-2.jpg";
import foto_3 from "../../../assets/img/Prodject-3.jpg";

const PRODJECT_ARRAY = [
  {
    img: foto_1,
    title: "Детская математика",
    description: "Stack: Html, Css, Sass, JavaScript",
    link: "https://github.com/litvinenko88/Math-for-kids",
  },
  {
    img: foto_2,
    title: "Мой банк",
    description: "Stack: Html, Css, Sass, JavaScript",
    link: "https://github.com/litvinenko88/My-bank",
  },
  {
    img: foto_3,
    title: "Игра в кости",
    description: "Stack: Html, Css, Sass, JavaScript",
    link: "https://github.com/litvinenko88/dice-games",
  },
];

function Prodject() {
  console.log();
  return (
    <React.Fragment>
      <Heading heading="Мой проекты" />

      <div className={styles.wrapper}>
        <button className={styles.button}>&lt;</button>
        <div className={styles["display-container"]}>
          <ul className={styles["slider-wrapper"]}>
            {PRODJECT_ARRAY.map((item) => (
              <ProdjectList
                key={item.link}
                img={item.img}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </ul>
        </div>
        <button className={styles.button}>&gt;</button>
      </div>
    </React.Fragment>
  );
}

export default Prodject;
{
  /* <button>&gt;</button>; */
}
{
  /* <button>&lt;</button>; */
}
