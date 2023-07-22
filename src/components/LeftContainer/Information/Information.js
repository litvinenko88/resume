import Heading from "../../UI/Heading";
import styles from "./Information.module.css";
import React from "react";
import InformationList from "./InformationList";

const INFORMATION_ARRAY = [
  {
    text: "Гражданство: Россия",
  },
  {
    text: "Занятость: полная занятость, проектная работа, стажировка",
  },
  {
    text: "График работы: полный день, гибкий, удаленный, офис",
  },
  {
    text: "Переезд: Москва, Санкт-петербург, Краснодарский край, Ростов на дону",
  },
  {
    text: "Готовность к командировкам: нет",
  },
  {
    text: "Город проживания: Ставрополь",
  },
];

function Information() {
  return (
    <React.Fragment>
      <Heading heading="Дополнительная информация" />

      <div className={styles.wrapper}>
        <ul className={styles["container-info"]}>
          {INFORMATION_ARRAY.map((item) => (
            <InformationList text={item.text}/>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Information;
