import styles from "./App.module.css";
import NavSatet from "./context/NavState";
import MainMenu from "./components/Hamburger/MainMenu";

import LeftContainer from "./components/LeftContainer/LeftContainer";
import RightContainer from "./components/RightContainer/RightContainer";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.container1}>
          <LeftContainer />
          <RightContainer />
        </div>

        <div className={styles.container2}>
          <NavSatet>
            <MainMenu />
          </NavSatet>
          <LeftContainer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
