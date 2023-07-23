import Wrapper from "../../UI/Wrapper";
import React from "react";
import styles from "./Contacts.module.css";
import ContactsList from "./ContactsList";

const CONTACTS_ARRAY = [
  {
    icons: "bi bi-telephone",
    link: "tel:+79964179001",
    title: "Телефон:",
    text: "+7(996)417-90-01",
  },
  {
    icons: "bi bi-envelope-at",
    link: "mailto:litvinenko_n.v@mail.ru",
    title: "Email:",
    text: "litvinenko_n.v@mail.ru",
  },
  {
    icons: "bi bi-telegram",
    link: "https://t.me/litvinenko_n_v",
    title: "Telegram:",
    text: "litvinenko_n_v",
  },
  {
    icons: "bi bi-github",
    link: "https://github.com/litvinenko88",
    title: "GitHub:",
    text: "Жми чтоб открыть",
  },
];

function Contacts() {
  return (
    <React.Fragment>
      <Wrapper heading="Контакты" />
      <nav>
        <ul className={styles.wrapper}>
          {CONTACTS_ARRAY.map((item, i) => (
            <ContactsList
              key={i}
              icons={item.icons}
              text={item.text}
              title={item.title}
              link={item.link}
            />
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
}
export default Contacts;
