import React, { Component } from "react";
import NavBar from "../components/navbar.jsx";
import Social from "../components/sm_bar.jsx";
import { Slide } from "react-slideshow-image";
import "./css/photos.css";

const slideImages = ["/tboard.jpeg", "/tboard.jpeg", "/tboard.jpeg"];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

class Photography extends Component {
  state = {};
  render() {
    return (
      <div class="photos-page">
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
          {/* Main Page */}
          <div id="main-page-photo">
            <div class="text-box">
              <div class="row justify-content-center">
                <div class="text">Thomas Chin</div>
              </div>
              <div class="row justify-content-center">
                <div id="main-text">Photography</div>
              </div>
            </div>
          </div>
          {/* Short bio */}
          <div id="short-page">
            <div class="text-box">
              <div class="row">
                <div class="col-8">I have been doing photography.</div>
                <div class="col-4">**Insert photo here**</div>
              </div>
            </div>
          </div>
          {/* Photos */}
          <div class="slides">
            <div class="text-box">
              <div class="row justify-content-center header-text">
                Graduation
              </div>
            </div>
            <div className="slide-container">
              <Slide {...properties}>
                <div className="each-slide">
                  <div>
                    <img
                      class="proj-img"
                      src={require("../Images" + slideImages[1])}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img
                      class="proj-img"
                      src={require("../Images" + slideImages[1])}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img
                      class="proj-img"
                      src={require("../Images" + slideImages[1])}
                      alt="pic"
                    />
                  </div>
                </div>
              </Slide>
            </div>
          </div>
          <div class="slides">
            <div class="text-box">
              <div class="row justify-content-center header-text">Family</div>
            </div>
            <div className="slide-container">
              <Slide {...properties}>
                <div className="each-slide">
                  <div>
                    <img
                      class="proj-img"
                      src={require("../Images" + slideImages[1])}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img
                      class="proj-img"
                      src={require("../Images" + slideImages[1])}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img
                      class="proj-img"
                      src={require("../Images" + slideImages[1])}
                      alt="pic"
                    />
                  </div>
                </div>
              </Slide>
            </div>
          </div>
          {/* Social Media Bar */}
          <Social />
        </body>
      </div>
    );
  }
}

export default Photography;
