import React, { useState } from "react";
import "./styles/Nav.css";

const Nav = ({ selectedCategory, setSelectedCategory, menuBar }) => {
  return (
    <div className="nav-container">
      <h1>WORK</h1>
      <div className="nav-menu-bar-container">
        <ul>
          {menuBar.map((menu) => {
            return (
              <li
                onClick={() => setSelectedCategory(menu)}
                key={menu.id}
                className={selectedCategory === menu ? "selected-li" : ""}
              >
                {menu}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
