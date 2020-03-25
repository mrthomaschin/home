import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

/* Website Components */
import HomePage from "./pages/home.jsx";
import AboutPage from "./pages/about.jsx";
import ProjectsPage from "./pages/projects.jsx";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
      </Switch>
    );
  }
}

export default App;
