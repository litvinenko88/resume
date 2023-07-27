import React, { useRef, useContext } from "react";
import useOnClickOutside from "./onClickOutside";
import { MenuContext } from "../../context/NavState";
import HamburgerButton from "./HamburgerButton";
import { SideMenu } from "./SideMenu";
import RightContainer from "../RightContainer/RightContainer";

const MainMenu = (props) => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node}>
      <div className={props.className}>
        <HamburgerButton />
      </div>
      <SideMenu>
        <RightContainer />
      </SideMenu>
    </header>
  );
};

export default MainMenu;
