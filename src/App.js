import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

/* Website Components */
import Home from "./Home/home.jsx";
// import FollowershipSurvey from "./SurveyComponents/FollowershipSurvey.js";
// import Survey3 from "./SurveyComponents/Survey3.js";
// import SurveyResults from "./SurveyComponents/SurveyResults.js";
// import Home from "./SurveyComponents/SurveyHome.js";
// import Demographics from "./SurveyComponents/Demographics.js";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
            <Route path="/SurveyHome" component={Home} />
            <Route path="/LeadershipSurvey" component={LeadershipSurvey} />
            <Route path="/Survey3" component={Survey3} />
            <Route path="/FollowershipSurvey" component={FollowershipSurvey} />
            <Route path="/Demographics" component={Demographics} />
            <Route path="/results" component={SurveyResults} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
