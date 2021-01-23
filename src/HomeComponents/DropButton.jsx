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
        Events
      </DropdownToggle>
      <DropdownMenu className="Dropdown-Menu" right>
        <DropdownItem className="Dropdown-Item">
          {/* add property [disabled] when on that page */}
          Dr. Amit Samarth
        </DropdownItem>
        <DropdownItem className="Dropdown-Item">Dave Haase</DropdownItem>
        <DropdownItem className="Dropdown-Item">James MacDonald</DropdownItem>
        <DropdownItem className="Dropdown-Item">Bukima Patel</DropdownItem>
        <DropdownItem className="Dropdown-Item">Julia Cross</DropdownItem>
        <DropdownItem className="Dropdown-Item">Christian Jensen</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default DropButton;
