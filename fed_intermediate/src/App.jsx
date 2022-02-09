import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import CaseStudies from "./components/CaseStudies";
import axios from "axios";
import "./App.css";

// const menuBar = [
//   "all",
//   "arts & culture",
//   "non-profits",
//   "publishing & education",
//   "wellness",
//   "sports",
// ];

function App() {
  const [categories, setCategories] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);

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
      <Nav categories={categories} setCategories={setCategories} />
      <CaseStudies />
    </div>
  );
}

export default App;
