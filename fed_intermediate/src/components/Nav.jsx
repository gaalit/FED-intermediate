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

  console.log(categories);
  return (
    <div className="nav-container">
      <h1>WORK</h1>
      {width <= 875 ? (
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
            {categories.map((category, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setSelectedCategory(category)}
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
