import { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from "react-router-dom";

import HamburgerMenuComponent from './Components/HamburgerMenu/HamburgerMenuComponent';
import Header from "./Components/Header/Header";

import Banner from "./Components/Banner/Banner";
import ProjectsPage from "./Components/Pages/ProjectsPage/ProjectsPage";
import ProjectDetail from './Components/ProjectDetail/ProjectDetail';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import ContactMe from './Components/Pages/ContactMe/ContactMe';
import UpArrow from './Components/UpArrow/UpArrow';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    menuOpen === true ? setMenuOpen(false) : setMenuOpen(true)
  }


let fullPath = useLocation();

  // This useEffect is here to scroll the page to the top when changing pages
  // Got solution ideas from https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
  // Implented slightly different in this application

useEffect(() => {
  window.scrollTo(0, 0);
}, [fullPath])

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
          <Banner menuOpen={menuOpen}/>
          <HamburgerMenuComponent menuOpen={menuOpen} toggleMenu={toggleMenu} color={'white'}/>
          { menuOpen && <Menu toggleMenu={toggleMenu} />}
        </Route>
        <Route path="/projects" exact>
          <HamburgerMenuComponent menuOpen={menuOpen} toggleMenu={toggleMenu} color={menuOpen ? 'white' : 'black'}/>
          { menuOpen && <Menu toggleMenu={toggleMenu} />}
          <Header title="Projects"/>
          <ProjectsPage />
          <Footer />
        </Route>
        <Route path="/projects/:project">
          <HamburgerMenuComponent menuOpen={menuOpen} toggleMenu={toggleMenu} color={menuOpen ? 'white' : 'black'}/>
          { menuOpen && <Menu toggleMenu={toggleMenu} />}
          <Header title="Projects"/>
          <ProjectDetail />
          <UpArrow />
          <Footer />
        </Route>
        <Route path="/AboutMe">
          <HamburgerMenuComponent menuOpen={menuOpen} toggleMenu={toggleMenu} color={menuOpen ? 'white' : 'black'}/>
          { menuOpen && <Menu toggleMenu={toggleMenu} />}
          <Header title="About Me"/>
          <AboutMe />
          <Footer />
        </Route>
        <Route path="/ContactMe">
          <HamburgerMenuComponent menuOpen={menuOpen} toggleMenu={toggleMenu} color={menuOpen ? 'white' : 'black'}/>
          { menuOpen && <Menu toggleMenu={toggleMenu} />}
          <Header title="Contact Me"/>
          <ContactMe />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
