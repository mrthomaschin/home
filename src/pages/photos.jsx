import React, { Component } from "react";
import NavBar from "../components/navbar.jsx";
import Social from "../components/sm_bar.jsx";
import { Slide } from "react-slideshow-image";
import "./css/photos.css";

const slideImages1 = [
  "/abby1.jpg",
  "/allison1.jpg",
  "/life1.jpg",
  "/abby2.jpg",
  "/ty1.jpg",
  "/katie1.jpg",
  "/stacy1.jpg",
  "/dana2.jpg",
  "/katie2.jpg",
];
const slideImages2 = [
  "/wu1.jpg",
  "/daniel1.jpg",
  "/kate1.jpg",
  "/fam2.jpg",
  "/wu2.jpg",
  "/fam2.jpg",
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
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
            <div class="text-box-main">
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
            <div class="container">
              <div class="row">
                <div class="col-7 text-body">
                  <div class="row">
                    <p>
                      Photography has been one of my enjoyments in the past few
                      years. I believe that the most beautiful and important
                      moments in life should be captured. I began with
                      spontaneous photoshoots with friends during college, and
                      still always enjoy sessions for fun. Recently, I've been
                      honored to start working with graduation portraits and
                      family photos as well!
                    </p>
                  </div>
                  <div class="row">
                    <p>
                      One of the aspects of photography is working quickly and
                      in the moment. Situations including change in scenery can
                      affect a photo. As the photographer, I enjoy manually
                      adjusting my camera and using the right tools to capture
                      the perfect image. Combining the technical aspects from
                      the camera to the computer pushes me to explore different
                      tecniques to produce a better result.
                    </p>
                  </div>
                  <div class="row">
                    <p>
                      The most real photos come from genuine feelings. Even as a
                      photographer I enjoy the vibe of a shoot and it drives me
                      to play my part. When I shoot, I let people enjoy
                      themselves however they please because it is their moment,
                      not mine.
                    </p>
                  </div>
                </div>
                <div class="col-5 text-body ">
                  {" "}
                  <img
                    class="photos-profile-img  shadow"
                    src={require("../Images/photography/lol.jpg")}
                    alt="pic"
                  />
                </div>
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
                      class="photos-img shadow"
                      src={require("../Images/photography/grad" +
                        slideImages1[0])}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img
                      class="photos-img shadow"
                      src={require("../Images/photography/grad" +
                        slideImages1[1])}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img
                      class="photos-img shadow"
                      src={require("../Images/photography/grad" +
                        slideImages1[2])}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img
                      class="photos-img shadow"
                      src={require("../Images/photography/grad" +
                        slideImages1[3])}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img
                      class="photos-img shadow"
                      src={require("../Images/photography/grad" +
                        slideImages1[4])}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img
                      class="photos-img shadow"
                      src={require("../Images/photography/grad" +
                        slideImages1[5])}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img
                      class="photos-img shadow"
                      src={require("../Images/photography/grad" +
                        slideImages1[6])}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img
                      class="photos-img shadow"
                      src={require("../Images/photography/grad" +
                        slideImages1[7])}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img
                      class="photos-img shadow"
                      src={require("../Images/photography/grad" +
                        slideImages1[8])}
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
                      class="photos-img shadow"
                      src={require("../Images/photography/fam" +
                        slideImages2[0])}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img
                      class="photos-img shadow"
                      src={require("../Images/photography/fam" +
                        slideImages2[1])}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img
                      class="photos-img"
                      src={require("../Images/photography/fam" +
                        slideImages2[2])}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img
                      class="photos-img shadow"
                      src={require("../Images/photography/fam" +
                        slideImages2[3])}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img
                      class="photos-img shadow"
                      src={require("../Images/photography/fam" +
                        slideImages2[4])}
                      alt="pic"
                    />
                  </div>
                </div>
                {/* <div className="each-slide">
                  <div>
                    <img
                      class="photos-img"
                      src={require("../Images/photography/fam" +
                        slideImages2[5])}
                      alt="pic"
                    />
                  </div>
                </div> */}
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
