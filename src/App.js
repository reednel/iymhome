import React, { Component } from "react";
import logo from "./logo.svg";
import "./css/Styles.css";
import samarth from "./images/samarth.PNG";
import haase from "./images/haase.png";
import macdonald from "./images/macdonald.PNG";
import cross from "./images/cross.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Nav Bar */}
        <div className="Nav-Bar">
          <div className="row">
            {/* add col here for icon or something */}
            <div className="col">
              <div className="Nav-Bar-Content">
                <a className="Nav-Bar-Content-Link" href="">
                  Features
                </a>
                <a className="Nav-Bar-Content-Link" href="">
                  About
                </a>
                <a className="Nav-Bar-Content-Link" href="">
                  Testimonials
                </a>
                <a className="Nav-Bar-Content-Link" href="">
                  Download
                </a>
                <a className="Nav-Bar-Content-Link" href="">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Live Event Data Section */}
        <div className="Live-Event">
          <div className="Live-Event-Box">
            <div className="row">
              <div className="col">
                <h2>Live event data</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Athlete Gallery */}
        <div className="Athlete-Gallery">
          <div className="row">
            <div className="col-sm-4">
              <div className="Athlete-Gallery-Card">
                <img className="Athlete-Gallery-Card-Image" src={samarth}></img>
                <div className="Athlete-Gallery-Card-Info">
                  <span className="Athlete-Gallery-Card-Name">
                    Dr. Amit Samarth
                  </span>
                  <span className="Athlete-Gallery-Card-Bio">
                    Ride Around India
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="Athlete-Gallery-Card">
                <img className="Athlete-Gallery-Card-Image" src={haase}></img>
                <div className="Athlete-Gallery-Card-Info">
                  <span className="Athlete-Gallery-Card-Name">Dave Haase</span>
                  <span className="Athlete-Gallery-Card-Bio">
                    Bicycle Route 66
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="Athlete-Gallery-Card">
                <img
                  className="Athlete-Gallery-Card-Image"
                  src={macdonald}
                ></img>
                <div className="Athlete-Gallery-Card-Info">
                  <span className="Athlete-Gallery-Card-Name">
                    James MacDonald
                  </span>
                  <span className="Athlete-Gallery-Card-Bio">TBD</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <div className="Athlete-Gallery-Card">
                <img className="Athlete-Gallery-Card-Image"></img>
                <div className="Athlete-Gallery-Card-Info">
                  <span className="Athlete-Gallery-Card-Name">
                    Bukima Patel
                  </span>
                  <span className="Athlete-Gallery-Card-Bio">TBD</span>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="Athlete-Gallery-Card">
                <img className="Athlete-Gallery-Card-Image" src={cross}></img>
                <div className="Athlete-Gallery-Card-Info">
                  <span className="Athlete-Gallery-Card-Name">Julia Cross</span>
                  <span className="Athlete-Gallery-Card-Bio">
                    Canadian Challenge
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="Athlete-Gallery-Card">
                <img className="Athlete-Gallery-Card-Image"></img>
                <div className="Athlete-Gallery-Card-Info">
                  <span className="Athlete-Gallery-Card-Name">
                    Christian Jensen
                  </span>
                  <span className="Athlete-Gallery-Card-Bio">TBD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
