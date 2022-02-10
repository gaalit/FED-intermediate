import React, { useState } from "react";
import "./styles/Nav.css";
import Hamburger from "./Hamburger";
import useWindowDimensions from "./useWindowDimensions";

const Nav = ({ categories, selectedCategory, setSelectedCategory }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const { width } = useWindowDimensions();

  return (
    <div className="nav-container">
      <h1>WORK</h1>
      {width <= 750 ? (
        <Hamburger
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          hamburgerOpen={hamburgerOpen}
          toggleHamburger={toggleHamburger}
        />
      ) : (
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
      )}
    </div>
  );
};

export default Nav;
