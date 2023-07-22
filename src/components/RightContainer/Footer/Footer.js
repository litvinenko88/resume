import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.decor}></div>
      <div className={styles["container-icons"]}>
        <a href="https://t.me/litvinenko_n_v" className={styles.link}>
          <i className="bi bi-telegram"></i>
        </a>
        <a href="https://wa.me/79964179001?" className={styles.link}>
          <i class="bi bi-whatsapp"></i>
        </a>
        <a href="mailto:litvinenko_n.v@mail.ru" className={styles.link}>
          <i class="bi bi-envelope-at"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
