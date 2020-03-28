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
        <div class="col-7">Insert picture here</div>
        <div class="col-5">
          <div class="row p-big">"TBOARD"</div>
          <div class="row p-small offset-left">Arduino</div>
          <div class="row p-med offset-left">$ OCT 2019 - DEC 2019</div>
          <div class="rectangle" />
          <div class="row p-med whitespace offset-left">
            Size:
            <div class="square border border-dark">S</div>
            <div class="square2 border border-dark">M</div>
            <div class="square border border-dark">L</div>
            <div class="square border border-dark">XL</div>
          </div>
          <div class="row p-small whitespace offset-left">
            <li>An Arduino-powered electric skateboard. Whaaaa</li>
          </div>
          <button class="btn rect-button">
            <div class="p-med text-center text-white offset-left">
              Learn More
            </div>
          </button>
          <button class="btn p-small offset-left">GitHub Repository</button>
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
              <div class="row whitespace">
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
