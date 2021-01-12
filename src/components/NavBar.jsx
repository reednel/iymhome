import React, { Component } from "react";
import "../css/Styles.css";

//import { createPopper } from '@popperjs/core';
// import { DropdownButton } from "react-bootstrap";
// import { Dropdown } from "react-bootstrap";
//import Dropdown from "@bit/react-bootstrap.react-bootstrap.dropdown";
//import 'react-dropdown/style.css';

class NavBar extends Component {
  render() {
    return (
      <div className="Nav-Bar">
        <div className="row">
          {/* add col here for icon or something */}
          <div className="col">
            <div className="Nav-Bar-Title">It's Your Move</div>
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
                <button
                  class="Btn Btn-Primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  User
                </button>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a class="dropdown-item active" href="">
                    Pledge
                  </a>
                  <a class="dropdown-item" href="">
                    Settings
                  </a>
                  <a class="dropdown-item" href="">
                    Login/Logout
                  </a>
                </div>
              </div>

              {/* <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>
  
              <Dropdown.Menu>
                <Dropdown.Item href="">Action</Dropdown.Item>
                <Dropdown.Item href="">Another action</Dropdown.Item>
                <Dropdown.Item href="">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
