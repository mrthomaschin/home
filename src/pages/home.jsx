import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import NavBar from "../components/navbar.jsx";
import Proj from "../data/projects.json";
import { Link } from "react-scroll";
import Fade from "react-reveal";
import "./css/home.css";

function AddProject() {
  return (
    <div class="text-box-projects">
      {Proj.Projects.map((project) => {
        return (
          <div class="project-brief-section">
            <div class="project-brief-box shadow">
              <div class="container">
                <div class="row">
                  <div class="project-brief-title project-brief-text">
                    {project.title}
                  </div>
                  <div class="project-brief-text project-brief-body">
                    {project.descriptionbrief}
                  </div>
                  <div class="project-brief-text align-right">
                    <HashLink
                      class="nav-link project-link"
                      to={"/projects#" + project.section}
                    >
                      Project Page
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
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
          <div id="main-page">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-4">
                  <Fade>
                    <img
                      class="profile-pic shadow"
                      src={require("../Images/me.png")}
                      alt="Me"
                    />
                  </Fade>
                </div>
                <div class="col-md-8">
                  <Fade class="container">
                    <div class="row">
                      <div class="title-text-1">Hello! I'm Thomas.</div>
                    </div>
                    <div class="row">
                      <div class="body-text-1">
                        4th-year studying Computer Engineering at the University
                        of California, Riverside. Fascinated in all things
                        technology. Deeply passionate about creating others that
                        will have a positive impact on the world and benefit
                        others!
                      </div>
                    </div>
                    <div class="container">
                      <div class="row justify-content-center">
                        <div class="scroll-button">
                          <Link
                            activeClass="active"
                            to="skills-brief"
                            spy={true}
                            smooth={true}
                            duration={1400}
                          >
                            <div class="button-dark-blue">Learn More</div>
                          </Link>
                        </div>
                        <a
                          class="button-light-blue resume-link"
                          href="Thomas_Chin_Resume.pdf"
                          download
                        >
                          Resumé
                        </a>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          {/* Skills set */}
          <div id="skills-brief">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="title-text-2">My stack.</div>
                    </div>
                    <div class="row justify-content-center">
                      <div id="skills-tools-box">
                        <div class="row justify-content-center">
                          <div class="title-text-3 ">Tools</div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="row ">
                              <div class="body-text-1">React JS</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1">Bootstrap</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1">ASP .NET Core</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1">MVC</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1">Node JS</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1">RESTful API</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1">Flask</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1">MongoDB</div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="row">
                              <div class="body-text-1">Firestore</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1">JSON</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1">Embedded Systems</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1">Verilog</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1">
                                Arduino/Raspberry Pi
                              </div>
                            </div>
                            <div class="row">
                              <div class="body-text-1">Git</div>
                            </div>
                            <div class="row">
                              <div class="body-text-1">
                                Visual Studio / VS Code
                              </div>
                            </div>
                            <div class="row">
                              <div class="body-text-1">Figma</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="container">
                    <div id="skills-col-2" class="row justify-content-center">
                      <div class="col-md-6">
                        <div class="container">
                          <div class="row skills-language-parent">
                            <img
                              class="skills-icon"
                              src={require("../Images/Icons/skills/icons8-c++-480.png")}
                              alt="C++"
                            />
                            <div class="skills-icon-name">C++</div>
                          </div>
                          <div class="row skills-language-parent">
                            <img
                              class="skills-icon"
                              src={require("../Images/Icons/skills/icons8-java-480.png")}
                              alt="Java"
                            />
                            <div class="skills-icon-name">Java</div>
                          </div>
                          <div class="row skills-language-parent">
                            <img
                              class="skills-icon"
                              src={require("../Images/Icons/skills/icons8-c-programming-480.png")}
                              alt="C"
                            />
                            <div class="skills-icon-name">C</div>
                          </div>
                          <div class="row skills-language-parent">
                            <img
                              class="skills-icon"
                              src={require("../Images/Icons/skills/icons8-c-sharp-logo-480.png")}
                              alt="C#"
                            />
                            <div class="skills-icon-name">C#</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="container">
                          <div class="row skills-language-parent">
                            <img
                              class="skills-icon"
                              src={require("../Images/Icons/skills/icons8-html-5-480.png")}
                              alt="HTML"
                            />
                            <div class="skills-icon-name">HTML</div>
                          </div>
                          <div class="row skills-language-parent">
                            <img
                              class="skills-icon"
                              src={require("../Images/Icons/skills/icons8-css3-480.png")}
                              alt="CSS"
                            />
                            <div class="skills-icon-name">CSS</div>
                          </div>
                          <div class="row skills-language-parent">
                            <img
                              class="skills-icon"
                              src={require("../Images/Icons/skills/icons8-javascript-480.png")}
                              alt="Javascript"
                            />
                            <div class="skills-icon-name">Javascript</div>
                          </div>
                          <div class="row skills-language-parent">
                            <img
                              class="skills-icon"
                              src={require("../Images/Icons/skills/icons8-python-480.png")}
                              alt="Python"
                            />
                            <div class="skills-icon-name">Python</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Short summary about projects */}
          <div id="projects-brief">
            <div class="container">
              <div class="row justify-content-center">
                <div class="title-text-4">Projects</div>
              </div>
              <div class="row">
                <AddProject />
              </div>
            </div>
          </div>
          {/* Contact Info */}
          <div id="contact-info">
            <div class="row">
              <div class="col text-center">
                <div class="title-text-4-white">Wanna chat? Let's connect.</div>
                <div class="container">
                  <div class="row justify-content-center icon-center">
                    <div id="contact-info-bar">
                      <div class="row justify-content-center">
                        <div class="col-md-2">
                          <a
                            id="email-link"
                            href="mailto: thomasc246@gmail.com"
                          >
                            <img
                              src={require("../Images/Icons/social/mail.png")}
                              class="home-handle-icon"
                              alt="instagram"
                            />
                          </a>
                        </div>
                        <div class="col-md-2">
                          <a
                            class="social"
                            href="https://www.linkedin.com/in/mrthomaschin/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={require("../Images/Icons/social/linkedin.png")}
                              class="home-handle-icon"
                              alt="linkedin"
                            />
                          </a>
                        </div>
                        <div class="col-md-2">
                          <a
                            class="social"
                            href="https://github.com/mrthomaschin"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={require("../Images/Icons/social/github.png")}
                              class="home-handle-icon"
                              alt="github"
                            />
                          </a>
                        </div>
                        <div class="col-md-2">
                          <a
                            class="social"
                            href="https://www.instagram.com/chinsanity_/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={require("../Images/Icons/social/instagram.png")}
                              class="home-handle-icon"
                              alt="instagram"
                            />
                          </a>
                        </div>
                        <div class="col-md-2">
                          <a
                            class="social"
                            href="https://www.facebook.com/mr.thomaschin"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={require("../Images/Icons/social/facebook.png")}
                              class="home-handle-icon"
                              alt="instagram"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Home;
