import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
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
          <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="collapse navbar-collapse" id="nav-items">
              <ul class="navbar-nav mr-auto">
                <Link class="nav-brand" to="/">
                  TC
                </Link>
              </ul>
              <ul class="navbar-nav ml-auto">
                <li>
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link class="nav-link" to="/projects">
                    Projects
                  </Link>
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
        </body>
      </div>
    );
  }
}

export default NavBar;
