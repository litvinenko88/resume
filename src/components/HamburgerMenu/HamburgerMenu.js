import HamburgerList from "./HamburgerList";

function HamburgerMenu(props) {
  return (
    <div className={props.className}>
      <HamburgerList>{props.children}</HamburgerList>
    </div>
  );
}

export default HamburgerMenu;
