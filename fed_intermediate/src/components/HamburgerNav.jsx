import React from "react";
import "./styles/Nav.css";

const HamburgerNav = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="hamburger-menu-bar-container">
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
  );
};

export default HamburgerNav;
