import { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from "react-router-dom";

import ReactGA from 'react-ga';

import Header from "./Components/Header/Header";

import Banner from "./Components/Banner/Banner";
import ProjectsPage from "./Components/Pages/ProjectsPage/ProjectsPage";
import ProjectDetail from './Components/ProjectDetail/ProjectDetail';
import Footer from './Components/Footer/Footer';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import ContactMe from './Components/Pages/ContactMe/ContactMe';

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

// Google Analytics
ReactGA.initialize(process.env.REACT_APP_ANALYTICS);
ReactGA.pageview(window.location.pathname);

const handleResumeClick = () => {
  ReactGA.event({
      category: "Links",
      action: "Resume",
      label: "Resume Link Clicked",
      value: 1
  })
}

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Banner menuOpen={menuOpen} toggleMenu={toggleMenu} handleResumeClick={handleResumeClick}/>
        </Route>
        <Route path="/projects" exact>
          <Header title="Projects" menuOpen={menuOpen} toggleMenu={toggleMenu} handleResumeClick={handleResumeClick}/>
          <ProjectsPage />
          <Footer />
        </Route>
        <Route path="/projects/:project">
          <Header title="Projects" menuOpen={menuOpen} toggleMenu={toggleMenu} handleResumeClick={handleResumeClick}/>
          <ProjectDetail />
          <Footer />
        </Route>
        <Route path="/AboutMe">
          <Header title="About Me" menuOpen={menuOpen} toggleMenu={toggleMenu} handleResumeClick={handleResumeClick}/>
          <AboutMe handleResumeClick={handleResumeClick}/>
          <Footer />
        </Route>
        <Route path="/ContactMe">
          <Header title="Contact Me" menuOpen={menuOpen} toggleMenu={toggleMenu} handleResumeClick={handleResumeClick}/>
          <ContactMe />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
