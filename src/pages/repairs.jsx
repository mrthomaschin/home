import React, { Component } from "react";
import NavBar from "../components/navbar.jsx";
import Social from "../components/sm_bar.jsx";
import img1 from "../Images/imac.png";
import "./css/repairs.css";

class Repairs extends Component {
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
          <div class="background1">
            <div id="main-text-repairs">
              <div id="first-page" class="text-box">
                <div class="row">
                  <div class="col-8">
                    i believe that anyone can fix anything.
                  </div>
                  <div class="col-4">
                    <img id="main-pic" src={img1} alt="main-pic" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="background2">
            <div class="row">
              <div class="col-12">
                <div id="summary" class="text-box text-repairs">
                  I love tinkering! I would consider repairing tech items a
                  specialty of mine. I have worked with several computers,
                  laptops, and smartphones. My work ranges from simple battery
                  replacements and component upgrades to LCD replacements and
                  more. I also work with electric vehicles as well, such as
                  skateboards and scooters. I personally find satisfaction
                  restoring a broken product and bringing it back to life. Now,
                  whenever my friends and family have any sort of technical
                  issues with their devices, they come to me for help. I'm
                  always honored to help with their needs and save them some
                  money and a trip to the repair store as well!
                </div>
              </div>
            </div>
          </div>
          <div class="background3">
            <div class="row">
              <div class="col-12">
                <div id="parts-list" class="text-box text-repairs">
                  List of a few of the devices I've worked with:
                  <li>MacBook Pro</li>
                  <li>MacBook Air</li>
                  <li>iMac</li>
                  <li>iPhone X</li>
                  <li>iPhone 7</li>
                  <li>iPhone 6/6s</li>
                  <li>Samsung Galaxy</li>
                  <li>Windows laptops</li>
                  <li>PCs</li>
                </div>
              </div>
            </div>
          </div>
          {/* Social Media Bar */}
          <div class="background">
            <Social />
          </div>
        </body>
      </div>
    );
  }
}

export default Repairs;
