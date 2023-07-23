import styles from "./HamburgerList.module.css";

function HamburgerList(props) {
  return (
    <nav className={styles["hamburger-menu"]}>
      <input
        className={styles["menu__toggle"]}
        id="menu__toggle"
        type="checkbox"
      />
      <label className={styles["menu__btn"]} htmlFor="menu__toggle">
        <span></span>
      </label>

      <div className={styles["menu__box"]}>{props.children}</div>
    </nav>
  );
}

export default HamburgerList;
