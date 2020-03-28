import React, { Component } from "react";
import NavBar from "../components/navbar.jsx";
import Social from "../components/sm_bar.jsx";
import Proj from "../data/projects.json";
import "./css/projects.css";

function ProjectsMenu() {
  return (
    <div class="projects-text-box">
      {/* {Proj.Projects.map(project => {
        return <div>Hello</div>;
      })} */}
      <div class="row">
        <div class="col-7">Hello!</div>
        <div class="col-5">
          <div class="row p-big">"Project Name"</div>
          <div class="row p-small">Tools</div>
          <div class="row p-med">Date</div>
          <div class="rectangle" />
          <div class="row p-med whitespace">Size = Project size?</div>
          <div class="row p-small whitespace">
            <li>Projects Brief</li>
          </div>
          <button class="btn rect-button">
            <div class="p-med text-center text-white">Learn More</div>
          </button>
          <button class="btn p-small">GitHub Repo</button>
        </div>
      </div>
    </div>
  );
}

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
          {/* Projects Page */}
          <div id="projects-page">
            <div id="projects-title" class="projects-text-box">
              <div class="row">
                <div class="col-12 text-left">"PROJECTS"</div>
              </div>
            </div>
            <div id="projects-main" class="projects-text-box">
              <ProjectsMenu />
            </div>
          </div>
          {/* Social Media Bar */}
          <Social />
        </body>
      </div>
    );
  }
}

export default Projects;
