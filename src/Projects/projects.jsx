import React, { Component } from "react";
import "./projects.css";

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
          <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="collapse navbar-collapse" id="nav-items">
              <ul class="navbar-nav mr-auto">
                <a class="navbar-brand" href="/">
                  TC
                </a>
              </ul>
              <ul class="navbar-nav ml-auto">
                <li>
                  <a class="nav-link" id="about-main" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a class="nav-link" id="about-main" href="/projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a class="nav-link" id="about-main" href="/">
                    Photography
                  </a>
                </li>
                <li>
                  <a class="nav-link" id="about-main" href="/">
                    Music
                  </a>
                </li>
                <li>
                  <a class="nav-link" id="about-main" href="/">
                    Resumé
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div>PROOOOOJJJJJEEEECCCTTTTSSS</div>
        </body>
      </div>
    );
  }
}

export default Projects;
