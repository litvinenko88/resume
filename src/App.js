import styles from "./App.module.css";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";

import LeftContainer from "./components/LeftContainer/LeftContainer";
import RightContainer from "./components/RightContainer/RightContainer";

function App() {
  return (
    <div className={styles.wrapper}>
      <LeftContainer />
      <RightContainer />
    </div>
  );
}

export default App;
