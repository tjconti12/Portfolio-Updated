import { Switch, Route } from "react-router-dom";

import HomePage from "./Components/Pages/HomePage/HomePage";
import ProjectsPage from "./Components/Pages/ProjectsPage/ProjectsPage";


function App() {


  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/projects" exact>
          <ProjectsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
