import styles from "./ContactsList.module.css";

function ContactsList(props) {
  return (
    <li className={styles.wrapper}>
      <i className={props.icons}></i>
      <a className={styles.text} href={props.link} target="blank">
        {`${props.title} ${props.text}`}
      </a>
    </li>
  );
}

export default ContactsList;
