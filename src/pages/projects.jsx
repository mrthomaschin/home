import React, { Component } from "react";
import NavBar from "../components/navbar.jsx";
import Social from "../components/sm_bar.jsx";
import "./css/projects.css";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div>
        <head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          />

          {/* Open Graph Meta Tags */}
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </head>
        <body>
          {/* NavBar */}
          <NavBar />
          {/* Social Media Bar */}
          <Social />
        </body>
      </div>
    );
  }
}

export default Projects;
