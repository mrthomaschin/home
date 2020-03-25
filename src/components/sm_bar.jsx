import React, { Component } from "react";
import icon1 from "../Images/Icons/010-linkedin.svg";
import icon2 from "../Images/Icons/github.svg";
import icon3 from "../Images/Icons/011-instagram.svg";
import "./sm_bar.css";

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

export default SocialMedia;
