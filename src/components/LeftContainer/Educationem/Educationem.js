import Heading from "../../UI/Heading";
import ExperienceList from "../Experience/ExperienceList";
import styles from "./Educationem.module.css";
import React from "react";

const EDUCATIONEM_ARRAY = [
  {
    id: 1,
    year: ["Май 2022 — ", "по настоящие время"],
    locus: "Самостоятельное обучение",
    post: "Front-end разработчик",
    description:
      "Разработка сайтов и web-приложении. Технологический stack: Html, Css, Sass, JavaScript, React, Axios, Webpack, GitHub",
  },
  {
    id: 2,
    year: ["Январь 2020 —", "по Июнь 2022"],
    locus: "Рекламное агентство IMBA, Redhamster",
    post: "Интернет-маркетолог, таргетолог",
    description:
      "Поиск целевой аудиторий, работа с таргетированной рекламой, с контекстной рекламой, SEO, медийная реклама, разработка воронок продаж, SERM, разработка рекламных банеров.",
  },
  {
    id: 3,
    year: ["Сентябрь 2015 —", "по Июнь 2018"],
    locus: "Ставропольский политехнический колледж",
    post: "Мастер инженерных систем жилищно-коммунального хозяйства",
    description: "Вентиляция и водоотведение",
  },
];

function Educationem() {
  return (
    <React.Fragment>
      <Heading heading="Образование" />

      <ul className={styles.wrapper}>
        {EDUCATIONEM_ARRAY.map((item) => (
          <ExperienceList
            key={item.id}
            year={item.year}
            locus={item.locus}
            description={item.description}
            post={item.post}
          />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Educationem;
