import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import Social from "../components/sm_bar.jsx";
import NavBar from "../components/navbar.jsx";
import Proj from "../data/projects.json";
import "./css/home.css";

function AddProject() {
  return (
    <div class="text-box-projects">
      {Proj.Projects.map(project => {
        return (
          <div>
            <div class="row project-brief-header">
              <div class="col-4 text-left">
                <div class="project-title">"{project.title}"</div>
              </div>
              <div class="col-8 text-right">
                <div class="project-date">&copy; {project.date}</div>
              </div>
            </div>
            <div class="row">
              <div class="col-8 text-left">
                <div> {project.descriptionbrief}</div>
              </div>
              <div class="col-4 text-right">
                <HashLink class="nav-link" to={"/projects#" + project.section}>
                  Project Page
                </HashLink>
              </div>
            </div>
            <div class="rectangle" />
            <div class="whitespace" />
          </div>
        );
      })}
    </div>
  );
}

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" type="text/css" href="index.css" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          />
          <meta property="og:title" content=" Main Page" />
          <meta property="og:site_name" content="Personal Website" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="" />
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </head>
        <body>
          {/* NavBar */}
          <NavBar />
          {/* Main Section */}
          <div class="main-page">
            <div class="row justify-content-center">
              <div id="main-title">
                <img
                  class="img-responsive center-block profile-pic-1"
                  src={require("../Images/lol3.png")}
                  alt="test-pic"
                />
                <img
                  class="img-responsive center-block off-white-thomas"
                  src={require("../Images/thomas-chin-engineer.png")}
                  alt="off-white-text"
                />
              </div>
            </div>
          </div>
          {/* Short summary of self */}
          <div id="about-brief">
            <div class="row">
              <div class="col-12 text-center">
                <div class="section-title">"HI, I'M THOMAS."</div>
              </div>
            </div>
            <div class="row">
              <div class="text-box-about">
                4th-year studying Computer Engineering at the University of
                California, Riverside. Fascinated in all things technology.
                Deeply passionate about creating others that will have a
                positive impact on the world and benefit others!
              </div>
            </div>
          </div>
          {/* Short summary about projects */}
          <div id="projects-brief">
            <div class="row">
              <div class="col-12 text-center">
                <div class="section-title">"PROJECTS"</div>
                <div class="row">
                  <AddProject />
                </div>
              </div>
            </div>
          </div>
          {/* Contact Info */}
          <div id="contact-info">
            <div class="row">
              <div class="col-12 text-center">
                <div class="section-title">"CONTACT"</div>
                <p2>
                  Questions? Shoot me an
                  <a href="mailto: thomasc246@gmail.com"> email</a>!
                </p2>
              </div>
            </div>
          </div>
          {/* Social Media Bar */}
          <Social />
        </body>
      </div>
    );
  }
}

export default Home;
