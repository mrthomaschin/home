import React, { Component } from "react";
import NavBar from "../components/navbar.jsx";
import Social from "../components/sm_bar.jsx";
import json from "../data/projects.json";
import { Modal } from "react-bootstrap";
// import { Slide } from "react-slideshow-image";
import "./css/projects.css";

// const properties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   arrows: true,
//   pauseOnHover: true,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`slide transition from ${oldIndex} to ${newIndex}`);
//   }
// };

class Projects extends Component {
  state = {};

  projectSizeSelect(projectsize) {
    if (projectsize === "small") {
      return (
        <>
          <div class="square2 border border-dark">S</div>
          <div class="square border border-dark">M</div>
          <div class="square border border-dark">L</div>
          <div class="square border border-dark">XL</div>
        </>
      );
    } else if (projectsize === "medium") {
      return (
        <>
          <div class="square border border-dark">S</div>
          <div class="square2 border border-dark">M</div>
          <div class="square border border-dark">L</div>
          <div class="square border border-dark">XL</div>
        </>
      );
    } else if (projectsize === "large") {
      return (
        <>
          <div class="square border border-dark">S</div>
          <div class="square border border-dark">M</div>
          <div class="square2 border border-dark">L</div>
          <div class="square border border-dark">XL</div>
        </>
      );
    } else {
      return (
        <>
          <div class="square border border-dark">S</div>
          <div class="square border border-dark">M</div>
          <div class="square border border-dark">L</div>
          <div class="square2 border border-dark">XL</div>
        </>
      );
    }
  }

  showModal = this.showModal.bind(this);
  hideModal = this.hideModal.bind(this);

  showModal(e, index) {
    this.setState({ activeModal: index });
  }

  hideModal() {
    this.setState({ activeModal: null });
  }

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
            {/* Main Page */}
            <div id="projects-main" class="projects-text-box">
              {json.Projects.map((project, index) => (
                <div>
                  <div class="projects-text-box">
                    <div id="slidecontainer">
                      <div class="row">
                        <div class="col-7">
                          <img
                            class="proj-img"
                            src={require("../Images" + project.imgURL)}
                            alt="pic"
                          />
                        </div>
                        <div class="col-5">
                          <div class="row p-big whitespace-small">
                            "{project.title}"
                          </div>
                          <div class="row p-small offset-left whitespace-small">
                            {project.tools}
                          </div>
                          <div class="row p-med offset-left">
                            $ {project.date}
                          </div>
                          <div class="rectangle-projects" />
                          <div class="row p-med whitespace offset-left">
                            Project Size:{" "}
                            {this.projectSizeSelect(project.projectsize)}
                          </div>
                          <div class="row p-small whitespace offset-left">
                            <li> {project.descriptionbrief} </li>
                          </div>
                          <button
                            class="btn rect-button"
                            onClick={e => this.showModal(e, index)}
                          >
                            <div class="p-med text-center text-white offset-left">
                              Learn More
                            </div>
                          </button>
                          <button class="btn p-small offset-left">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Github Repository
                            </a>
                          </button>
                        </div>
                      </div>
                      <div class="whitespace-big" />
                    </div>
                  </div>
                  {/* Modal template */}
                  <Modal
                    size="lg"
                    show={this.state.activeModal === index}
                    onHide={this.hideModal}
                  >
                    <Modal.Header>
                      <Modal.Title class="Modal-Font p-big">
                        "{project.title}"
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body class="Modal-Font">
                      <p> {project.descriptionmain1} </p>
                      <p> {project.descriptionmain2} </p>
                    </Modal.Body>
                    <Modal.Footer>
                      <button
                        class="btn rect-modal-button"
                        onClick={this.hideModal}
                      >
                        Close
                      </button>
                    </Modal.Footer>
                  </Modal>
                </div>
              ))}
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
