import React, { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";

const menuBar = [
  "all",
  "arts & culture",
  "non-profits",
  "publishing & education",
  "wellness",
  "sports",
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState(menuBar[0]);
  return (
    <div className="App">
      <Nav
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        menuBar={menuBar}
      />
    </div>
  );
}

export default App;
