import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MenuContext } from "../../context/NavState";
import styles from "./SideMenu.module.css";
import cn from "classnames";

export const SideMenu = (props) => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <div
      className={cn(styles["wrapper-menu"], { [styles.active]: isMenuOpen })}>
      {props.children}
    </div>
  );
};

SideMenu.propTypes = {
  children: PropTypes.node,
};
