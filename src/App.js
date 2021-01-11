import React, { Component } from "react";
import logo from "./logo.svg";
import "./css/Styles.css";
import samarth from "./images/samarth.PNG";
import haase from "./images/haase.png";
import macdonald from "./images/macdonald.PNG";
import cross from "./images/cross.jpg";
import backgdrop from "./images/backdrop.jpg";
//import { createPopper } from '@popperjs/core';
//import Dropdown from 'react-dropdown' ;
//import 'react-dropdown/style.css';
import {Parallax} from "react-parallax";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parallax bgImage= {backgdrop} strength= {1000}>
        {/* Nav Bar */}
        <div className="Nav-Bar">
          <div className="row">
            {/* add col here for icon or something */}
            <div className="col">
              <div className="Nav-Bar-Title">
              It's Your Move
              </div>
            </div>
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
                <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                User
                            </button>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item active" href="">Pledge</a>
                                <a class="dropdown-item" href="">Settings</a>
                                <a class="dropdown-item" href="">Login/Logout</a>
                            </div>
                        </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Event Data Section */}
        <div className="Live-Event">
          <div className="Live-Event-Box">
            <div className="row">
              <div className ="Event-Preview">
              </div>
              <span className="Athlete-Preview">
                
               
              </span>
            </div>
          </div>
        </div>

        {/* Athlete Gallery */}
        <div className="Athlete-Gallery">
          <h2>Athletes</h2>
          <div className="row">
            <div className="col-sm-4">
              <div className="Athlete-Gallery-Card">
                <img className="Athlete-Gallery-Card-Image" src={samarth}></img>
                <div className="Athlete-Gallery-Card-Info">
                  <span className="Athlete-Gallery-Card-Name">
                    <a className="Athlete-Link" href="">
                      Dr. Amit Samarth
                    </a>
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
                  <span className="Athlete-Gallery-Card-Name">
                    <a className="Athlete-Link" href="">
                      Dave Haase
                    </a>
                  </span>
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
                    <a className="Athlete-Link" href="">
                      James MacDonald
                    </a> 
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
                    <a className="Athlete-Link" href="">
                      Bukima Patel
                    </a> 
                  </span>
                  <span className="Athlete-Gallery-Card-Bio">TBD</span>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="Athlete-Gallery-Card">
                <img className="Athlete-Gallery-Card-Image" src={cross}></img>
                <div className="Athlete-Gallery-Card-Info">
                  <span className="Athlete-Gallery-Card-Name">
                    <a className="Athlete-Link" href="">
                      Julia Cross
                    </a> 
                  </span>
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
                    <a className="Athlete-Link" href="">
                      Christian Jensen
                    </a> 
                  </span>
                  <span className="Athlete-Gallery-Card-Bio">TBD</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/*Past Events*/}
        <div className="Past-Event-Gallery">
          <h2>Past Events</h2>
          <div className="row">
            <div className="col-sm-4">
              <div className="Past-Event-Gallery-Card">
                <img className="Past-Event-Gallery-Card-Image" ></img>
                <div className="Past-Event-Gallery-Card-Info">
                  <span className="Past-Event-Gallery-Card-Name">
                    <a className="Past-Event-Link" href="">
                      Race Across America
                    </a>
                  </span>
                  <span className="Past-Event-Gallery-Card-Bio">
                    David Haase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>    

        {/* Sponser Section */}
        <div className="Sponsers">
          <div className="Sponsers-Box">
            <div className="Sponsers-Title">
              Sponsors
            </div>
            <div className="row">
              
            </div>
          </div>
        </div>

        </Parallax> 
      </div>
    );
  }
}

export default App;
