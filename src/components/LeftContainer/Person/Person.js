import styles from "./Person.module.css";
import foto from "../../../assets/img/105420686-transformed.png";

function PersonFoto() {
  return (
    <div className={styles.wrapper}>
      <div className={styles["foto-container"]}>
        <img src={foto} className={styles.img} alt="Изображение" />
      </div>

      <div className={styles["person-container"]}>
        <h1 className={styles.name}>Литвиненко Николай</h1>
        <h2 className={styles.position}>Front-end разработчик junior</h2>
      </div>
    </div>
  );
}

export default PersonFoto;
