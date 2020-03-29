import React, { Component } from "react";
import Social from "../components/sm_bar.jsx";
import NavBar from "../components/navbar.jsx";
import "./css/music.css";

class Music extends Component {
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
          {/* NavBar */}
          <NavBar />
          {/* Main Section */}
          Coming soon!
          {/* Social Media Bar */}
          <Social />
        </body>
      </div>
    );
  }
}

export default Music;
