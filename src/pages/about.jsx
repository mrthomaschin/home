import React, { Component } from "react";
import NavBar from "../components/navbar.jsx";
import Social from "../components/sm_bar.jsx";
import Fade from "react-reveal";
import "./css/about.css";

class About extends Component {
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
          <div id="about-page">
            <div class="row">
              <Fade>
                <div id="about-title">About</div>
              </Fade>
            </div>
            <div id="about-main">
              <div class="row">
                <div class="col-md-7">
                  <div class="row paragraph">
                    <Fade>
                      I'm a 4th year studying Computer Engineering at the
                      University of California, Riverside, expected to graduate
                      in June 2020. I'm currently looking for full-time
                      opportunities as a software engineer/developer.
                    </Fade>
                  </div>

                  <div class="row paragraph">
                    <Fade>
                      My passion with software engineering is to be able to
                      create products that can change the world. Through the
                      many skills and hobbies, I want to be able to have
                      positive impact on people's lives. I'm extremely grateful
                      for all of the opportunites and resources that have been
                      provided for me, and I aim to give back in any way that I
                      can.
                    </Fade>
                  </div>
                  <div class="row paragraph">
                    <Fade>
                      Software has always been my area of interest, more
                      specifically app development, following the footsteps of
                      my father. My primary language is C++, with exposure to
                      Java, C, and C#. I've worked on website development and
                      utilized tools such as React JS, Bootstrap, and .NET Core.
                      I have also had exposure to mobile app development, and
                      would love to learn more. I have also worked with
                      hardware, with Arudinos and Embedded-Systems as my
                      personal favorite.
                    </Fade>
                  </div>
                  <div class="row paragraph">
                    <Fade>
                      I have many hobbies and interests that I actively pursue!
                      I enjoy studying and producing music as well as learning
                      skills in photography and media. I also love tinkering
                      with and repairing electronics, a hobby that I picked up
                      throughout my time in college. When I go out, I enjoy
                      tennis and bowling as well.
                      {/* One of my passions in life is music, and it is
                    something I cannot. Growing up, I not only learned how to
                    play piano, but also to play by ear and understand music in
                    different ways. I enjoy DJing and creating EDM mixes for
                    others to enjoy. I also have self-taught myself guitar and
                    other instruments. In the future I want to be able to
                    compose and produce all variations of music. ***FOR MUSIC SECTION**** */}
                    </Fade>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="row justify-content-center">
                    <Fade>
                      <img
                        id="about-profile-pic"
                        src={require("../Images/lol2.png")}
                        alt="profile"
                      />
                    </Fade>
                  </div>
                </div>
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

export default About;
