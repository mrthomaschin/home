import React, { Component } from "react";
import img1 from "../Images/test-pic-lol.jpg";
import img2 from "../Images/thomas-chin-engineer.png";
import icon1 from "../Images/Icons/010-linkedin.svg";
import icon2 from "../Images/Icons/github.svg";
import icon3 from "../Images/Icons/011-instagram.svg";
import "./home.css";

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
          <meta property="og:url" content="mrthomaschin.github.io/welcome" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="" />
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
          <div id="main-page">
            <div class="row justify-content-center">
              <div id="main-title">
                <img
                  class="img-responsive center-block profile-pic-1"
                  src={img1}
                  alt="test-pic"
                />
                <img
                  class="img-responsive center-block off-white-thomas"
                  src={img2}
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
                <p2>
                  4th-year studying Computer Engineering at the Unversity of
                  California, Riverside. Fascinated in all things technology.
                  Deeply passionate about creating others that will have a
                  positive impact on the world and benefit others!
                </p2>
              </div>
            </div>
          </div>
          {/* Short summary about projects */}
          <div id="projects-brief">
            <div class="row">
              <div class="col-12 text-center">
                <div class="section-title">"PROJECTS"</div>
                <div class="row">
                  <div class="row justify-content-around">
                    <div class="col-6">
                      <div class="project-title">"TBOARD"</div>
                      <div class="project-date">&copy OCT 2019</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="project-image"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Info */}
          <div id="contact-info">
            <div class="row">
              <div class="col-12 text-center">
                <div class="section-title">"CONTACT"</div>
                <p2>Questions? Shoot me an email!</p2>
              </div>
            </div>
          </div>
          {/* Social Media Bar */}
          <div id="handles" align="center">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <a
                  class="social"
                  href="https://www.linkedin.com/in/mrthomaschin/"
                >
                  <img src={icon1} width="40px" alt="linkedin" />
                </a>
                <a class="social" href="https://github.com/mrthomaschin">
                  <img src={icon2} width="40px" alt="github" />
                </a>
                <a class="social" href="https://www.instagram.com/chinsanity_/">
                  <img src={icon3} width="40px" alt="instagram" />
                </a>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Home;
