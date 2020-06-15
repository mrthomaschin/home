import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/navbar_dark.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <head>
          <link
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
            rel="stylesheet"
          />
          <meta property="og:title" content="Nav Bar" />
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
          <nav class="navbar navbar-expand-lg navbar-dark dark-mode-bg">
            <div class="collapse navbar-collapse" id="nav-items">
              <div class="navbar-link-style">
                <ul class="navbar-nav mr-auto">
                  <Link class="nav-link navbar-link dark-mode-navlink" to="/">
                    <img
                      class="logo"
                      src={require("../Images/Icons/Logo-White.png")}
                      alt="logo-white"
                    />
                  </Link>
                </ul>
              </div>
              <ul class="navbar-nav ml-auto">
                <li>
                  <Link
                    class="nav-link navbar-link dark-mode-navlink"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    class="nav-link navbar-link dark-mode-navlink"
                    to="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    class="nav-link navbar-link dark-mode-navlink"
                    to="/photography"
                  >
                    Photography
                  </Link>
                </li>
                {/* <li>
                  <Link class="nav-link navbar-link" to="/music">
                    Music
                  </Link>
                </li> */}
                <li>
                  <Link
                    class="nav-link navbar-link dark-mode-navlink"
                    to="/repairs"
                  >
                    Repairs
                  </Link>
                </li>
                <li>
                  <a
                    class="nav-link navbar-link dark-mode-navlink"
                    href="https://drive.google.com/file/d/1b8nfwzprEqgO64F4sfBe7UFIOZKqtdkh/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
