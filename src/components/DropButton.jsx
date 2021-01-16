import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "../css/Styles.css";

const DropButton = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown className="Dropdown" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="Dropdown-Toggle" caret>
        User
      </DropdownToggle>
      <DropdownMenu className="Dropdown-Menu" right>
        <DropdownItem className="Dropdown-Item">
          {/* add property [disabled] when on that page */}
          Pledge
        </DropdownItem>
        <DropdownItem className="Dropdown-Item">Settings</DropdownItem>
        <DropdownItem className="Dropdown-Item">Login/Logout</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default DropButton;
