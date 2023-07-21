import styles from "./ProdjectList.module.css";

function ProdjectList(props) {
  return (
    <li className={styles["slider-container"]}>
      <img
        src={props.img}
        className={styles["img-slider"]}
        alt="Изображение проекта"
      />
      <div className={styles["prodject-text-container"]}>
        <h3 className={styles["prodject-heading"]}>{props.title}</h3>
        <p className={styles["prodject-description"]}>{props.description}</p>
        <a
          className={styles["prodject-button"]}
          href={props.link}
          target="blank">
          Подробнее
        </a>
      </div>
    </li>
  );
}
export default ProdjectList;
