import React, { Component } from "react";
import { ButtonDropdown } from "reactstrap";
import "../css/Styles.css";
import DropButton from "../components/DropButton";

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

// import React, { Component } from "react";
// import { ButtonDropdown } from "reactstrap";
// import "../css/Styles.css";
// import DropButton from "../components/DropButton";

// //import { createPopper } from '@popperjs/core';
// // import { DropdownButton } from "react-bootstrap";
// // import { Dropdown } from "react-bootstrap";
// //import Dropdown from "@bit/react-bootstrap.react-bootstrap.dropdown";
// //import 'react-dropdown/style.css';

// class NavBar extends Component {
//   render() {
//     return (
//       <div className="Nav-Bar">
//         <div className="row">
//           {/* add col here for icon or something */}
//           <div className="col">
//             <div className="Nav-Bar-Title">It's Your Move</div>
//           </div>
//           <div className="col">
//             <div className="row Nav-Bar-Content">
//               <div className="col Nav-Bar-Content-Item">
//                 <a className="Nav-Bar-Content-Link" href="">
//                   Features
//                 </a>
//               </div>

//               <div className="col Nav-Bar-Content-Item">
//                 <a className="Nav-Bar-Content-Link" href="">
//                   About
//                 </a>
//               </div>

//               <div className="col Nav-Bar-Content-Item">
//                 <a className="Nav-Bar-Content-Link" href="">
//                   Testimonials
//                 </a>
//               </div>

//               <div className="col Nav-Bar-Content-Item">
//                 <a className="Nav-Bar-Content-Link" href="">
//                   Download
//                 </a>
//               </div>

//               <div className="col Nav-Bar-Content-Item">
//                 <a className="Nav-Bar-Content-Link" href="">
//                   Contact
//                 </a>
//               </div>
//               <div className="col">
//                 <DropButton />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NavBar;
