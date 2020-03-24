import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";

/* Website Components */
import HomePage from "./Home/home.jsx";
import AboutPage from "./About/about.jsx";
import ProjectsPage from "./Projects/projects.jsx";
// import Survey3 from "./SurveyComponents/Survey3.js";
// import SurveyResults from "./SurveyComponents/SurveyResults.js";
// import Home from "./SurveyComponents/SurveyHome.js";
// import Demographics from "./SurveyComponents/Demographics.js";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/homepage" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
      </Switch>
    );
  }
}

export default App;
