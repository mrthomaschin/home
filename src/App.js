import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

/* Website Components */
import HomePage from "./Home/home.jsx";
import AboutPage from "./About/about.jsx";
import ProjectsPage from "./Projects/projects.jsx";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/projects" component={ProjectsPage} />
      </Switch>
    );
  }
}

export default App;
