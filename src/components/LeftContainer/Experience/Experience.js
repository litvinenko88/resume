import Heading from "../../UI/Heading";
import Square from "../../UI/Square";
import styles from "./Experience.module.css";
import React from "react";
import ExperienceList from "./ExperienceList";

const EXPERIENCE_ARRAY = [
  {
    id: 1,
    year: ["Май 2022 — ", "по настоящие время"],
    locus: "Индивидуальное предпринимательство / частная практика / фриланс",
    post: "Front-end разработчик",
    description:
      "Разработка сайтов и web-приложении с использованием JavaScript, React, webpack",
  },
  {
    id: 2,
    year: ["Январь 2020 —", "по Июнь 2022"],
    locus: "Индивидуальное предпринимательство / фриланс",
    post: "Интернет-маркетолог",
    description:
      "Настройка и видение таргетированной рекламы, контекстной рекламы, медийной рекламы. Разработка воронок продаж, чат-ботов, стратегии, внедрение CRM системы. Сборка сайтов, квизов на конструкторе. Работа в графических программах для создания креативов. Создание и отправка ежедневного отчета. Коммуникация с клиентом и закрытие на продажу ",
  },
];

function Experience() {
  return (
    <React.Fragment>
      <Heading heading="Опыт работы" />

      <ul className={styles.wrapper}>
        {EXPERIENCE_ARRAY.map((item) => (
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

export default Experience;
