import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import CaseStudies from "./components/CaseStudies";
import useWindowDimensions from "./components/useWindowDimensions";
import axios from "axios";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [caseStudies, setCaseStudies] = useState([]);

  const { height, width } = useWindowDimensions();

  console.log("heigh", height, "width", width);

  const fetchCategories = () => {
    axios
      .get("https://plankdesign.com/wp-json/plank/v1/fed-test/categories")
      .then((res) => {
        const categoryArray = res.data.categories.map(
          (category) => category.title
        );
        setCategories(["All", ...categoryArray]);
      });
  };

  const fetchCaseStudies = () => {
    axios
      .get("https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies")
      .then((res) => setCaseStudies([...res.data["case-studies"]]));
  };

  useEffect(() => {
    fetchCategories();
    fetchCaseStudies();
  }, []);

  return (
    <div className="App">
      <div id="top-right-svg"></div>
      <Nav
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <CaseStudies
        selectedCategory={selectedCategory}
        caseStudies={caseStudies}
        setCaseStudies={setCaseStudies}
      />
      <div id="bottom-left-svg"></div>
      <div id="bottom-right-svg"></div>
    </div>
  );
}

export default App;
