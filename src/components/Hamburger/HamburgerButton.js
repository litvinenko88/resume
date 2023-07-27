import React, { useContext } from "react";
import { MenuContext } from "../../context/NavState";
import cn from "classnames";
import styles from "./HamburgerButton.module.css";

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <button
      className={cn(styles.button, { [styles.active]: isMenuOpen })}
      onClick={clickHandler}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default HamburgerButton;
