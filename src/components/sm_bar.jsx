import React, { Component } from "react";
import "./css/sm_bar.css";

class SocialMedia extends Component {
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
          <div id="handles" align="center">
            <div class="container">
              <div class="row justify-content-center icon-center">
                <div class="social-media-bar">
                  <div class="row justify-content-center">
                    <div class="col-md-2">
                      <a id="email-link" href="mailto: thomasc246@gmail.com">
                        <img
                          src={require("../Images/Icons/social/mail.png")}
                          width="45px"
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
                          width="45px"
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
                          width="45 px"
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
                          width="45px"
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
                          width="45px"
                          alt="instagram"
                        />
                      </a>
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

export default SocialMedia;
