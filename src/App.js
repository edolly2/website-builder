import "./App.css";

import React, { useState } from "react";

import Header from "./_components/Header";
import NavbarPC from "./_components/NavbarPC";

function App(props) {
  const [navbarPCActive, setNavbarPCActive] = useState(false);
  return (
    <div className="App">
      <Header mainMenuClick={() => setNavbarPCActive(true)} />
      <NavbarPC navbarPCstyle={{ display: navbarPCActive ? "flex" : "none" }} />
    </div>
  );
}

export default App;
