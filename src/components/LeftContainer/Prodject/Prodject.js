import Heading from "../../UI/Heading";
import styles from "./Prodject.module.css";
import React, { useState } from "react";
import ProdjectList from "./ProdjectList";

import foto_1 from "../../../assets/img/Prodject-1.jpg";
import foto_2 from "../../../assets/img/Prodject-2.jpg";
import foto_3 from "../../../assets/img/Prodject-3.jpg";

const PROJECT_ARRAY = [
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

function Project() {
  const [position, setPosition] = useState(0);

  const onPrevClickHandler = () => {
    if (position <= 0) {
      setPosition(100 * (PROJECT_ARRAY.length - 1));
    } else {
      setPosition(position - 100);
    }
  };
   const onNextClickHandler = () => {
     if (position < (PROJECT_ARRAY.length - 1) * 100) {
       setPosition(position + 100);
     } else {
       setPosition(0);
     }
   };

  return (
    <React.Fragment>
      <Heading heading="Мой проекты" />

      <div className={styles.wrapper}>
        <button className={styles.button} onClick={onPrevClickHandler}>
          <i className="bi bi-arrow-left"></i>
        </button>
        <div className={styles["display-container"]}>
          <ul
            className={styles["slider-wrapper"]}
            style={{ right: `${position}%` }}>
            {PROJECT_ARRAY.map((item) => (
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
        <button className={styles.button} onClick={onNextClickHandler}>
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </React.Fragment>
  );
}

export default Project;
