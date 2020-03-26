import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

/* Website Components */
import HomePage from "./pages/home.jsx";
import AboutPage from "./pages/about.jsx";
import ProjectsPage from "./pages/projects.jsx";
import RepairsPage from "./pages/repairs.jsx";
import PhotosPage from "./pages/photos.jsx";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/repairs" component={RepairsPage} />
        <Route path="/photography" component={PhotosPage} />
      </Switch>
    );
  }
}

export default App;
