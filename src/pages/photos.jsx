import React, { Component } from "react";
import NavBar from "../components/navbar.jsx";
import Social from "../components/sm_bar.jsx";
import "./css/photos.css";

class Photography extends Component {
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
          <div id="photos-page">
            <div class="text-box">
              <div class="row justify-content-center">Graduation Photos</div>
            </div>
          </div>
          <div id="photos-page">
            <div class="text-box">
              <div class="row justify-content-center">Families</div>
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
