import "./App.css";

import React, { useState } from "react";

import Header from "./_components/Header";
import NavbarPC from "./_components/NavbarPC";

const App = (props) => {
  const [navbarPCActive, setNavbarPCActive] = useState(false);
  console.log(navbarPCActive);

  return (
    <div className="App">
      <Header mainMenuClick={() => setNavbarPCActive(true)} />
      <NavbarPC
        style={{ marginBottom: navbarPCActive ? "0" : "1000px" }}
        menuClose={() => setNavbarPCActive(false)}
        menuCloseStyle={{ display: navbarPCActive ? "block" : "none" }}
      />
    </div>
  );
};

export default App;
