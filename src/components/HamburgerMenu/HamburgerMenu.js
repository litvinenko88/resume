import HamburgerList from "./HamburgerList";
import styles from "./HamburgerMenu.module.css";

function HamburgerMenu(props) {
  return (
    <div className={props.className}>
      <HamburgerList>{props.children}</HamburgerList>
    </div>
  );
}

export default HamburgerMenu;
