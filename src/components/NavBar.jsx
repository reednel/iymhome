import React, { Component } from "react";
import "../css/Styles.css";
import DropButton from "../components/DropButton";

class NavBar extends Component {
  render() {
    return (
      <div className="Nav-Bar">
        <div className="row">
          {/* add col here for icon or something */}
          <div className="col">
            <div className="Nav-Bar-Title">It's Your Move</div>
          </div>

          <div className="Nav-Bar-Content">
            <div className="Nav-Bar-Content-Item">
              <a className="Nav-Bar-Content-Link" href="">
                Features
              </a>
            </div>
            <div className=" Nav-Bar-Content-Item">
              <a className="Nav-Bar-Content-Link" href="">
                About
              </a>
            </div>
            <div className=" Nav-Bar-Content-Item">
              <a className="Nav-Bar-Content-Link" href="">
                Testimonials
              </a>
            </div>
            <div className=" Nav-Bar-Content-Item">
              <a className="Nav-Bar-Content-Link" href="">
                Download
              </a>
            </div>
            <div className=" Nav-Bar-Content-Item">
              <a className="Nav-Bar-Content-Link" href="">
                Contact
              </a>
            </div>
            <DropButton />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
