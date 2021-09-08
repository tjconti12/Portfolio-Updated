import { useState } from "react";

import HamburgerMenuComponent from "./Components/HamburgerMenu/HamburgerMenuComponent";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Projects from "./Components/Projects/Projects";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    menuOpen === true ? setMenuOpen(false) : setMenuOpen(true)
  }

  return (
    <div className="App">
      <Header menuOpen={menuOpen}/>
      <HamburgerMenuComponent toggleMenu={toggleMenu} menuOpen={menuOpen}/>
      { menuOpen && <Menu/>}
      {/* <Projects /> */}
    </div>
  );
}

export default App;
