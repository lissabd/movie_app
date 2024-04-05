import React from "react";
import "./DropDownMenu.scss";

const DropdownMenu = ({ handleLogout }) => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li onClick={handleLogout}>Log out</li>
      </ul>
    </div>
  );
};

export default DropdownMenu;