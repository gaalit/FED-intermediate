import React from "react";
import "./styles/Nav.css";

const Nav = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="nav-container">
      <h1>WORK</h1>
      <div className="nav-menu-bar-container">
        <ul>
          {categories.map((category) => {
            return (
              <li
                onClick={() => setSelectedCategory(category)}
                key={category.id}
                className={selectedCategory === category ? "selected-li" : ""}
              >
                {category}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
