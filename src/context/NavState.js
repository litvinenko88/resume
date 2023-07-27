import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MenuContext = createContext({
  isMenuOpen: true,
  toggleMenu: () => {},
});

function NavSatet({ children }) {
  const [isMenuOpen, toggleMenu] = useState(false);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>
      {children}
    </MenuContext.Provider>
  );
}

NavSatet.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavSatet;
