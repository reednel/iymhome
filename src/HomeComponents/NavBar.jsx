import React, { Component } from "react";
import "../css/Styles.css";
import DropButton from "../HomeComponents/DropButton";

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
              <a
                className="Nav-Bar-Content-Link"
                href="https://www.google.com/" // To get the warnings off my back
              >
                Home
              </a>
            </div>
            <div className=" Nav-Bar-Content-Item">
              <a
                className="Nav-Bar-Content-Link"
                href="https://www.google.com/" // Warnings
              >
                Pledges
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
