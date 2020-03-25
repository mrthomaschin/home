import React, { Component } from "react";
import img1 from "../Images/test-pic-lol.jpg";
import img2 from "../Images/thomas-chin-engineer.png";
import Social from "../components/sm_bar.jsx";
import NavBar from "../components/navbar.jsx";
import "./css/home.css";

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
          <NavBar />
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
                      <div class="project-date"> &copy OCT 2019</div>
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
          <Social />
        </body>
      </div>
    );
  }
}

export default Home;
