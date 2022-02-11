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
        {categories.map((category, index) => {
          return (
            <React.Fragment key={index}>
              <li
                onClick={() => setSelectedCategory(category)}
                key={index}
                className={selectedCategory === category ? "selected-li" : ""}
              >
                {category}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default HamburgerNav;
