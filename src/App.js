import { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import HamburgerMenuComponent from './Components/HamburgerMenu/HamburgerMenuComponent';
import Header from "./Components/Header/Header";

import HomePage from "./Components/Pages/HomePage/HomePage";
import ProjectsPage from "./Components/Pages/ProjectsPage/ProjectsPage";
import ProjectDetail from './Components/ProjectDetail/ProjectDetail';
import Menu from './Components/Menu/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    menuOpen === true ? setMenuOpen(false) : setMenuOpen(true)
  }

useEffect(() => {
  if(menuOpen) {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }
}, [menuOpen])

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage menuOpen={menuOpen} toggleMenu={toggleMenu}/>
        </Route>
        <Route path="/projects" exact>
          <HamburgerMenuComponent menuOpen={menuOpen} toggleMenu={toggleMenu} color="black"/>
          { menuOpen && <Menu toggleMenu={toggleMenu}/>}
          <Header />
          <ProjectsPage />
        </Route>
        <Route path="/projects/:project">
          <Header />
          <ProjectDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
