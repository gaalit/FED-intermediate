import React from "react";
import CaseStudy from "./CaseStudy";
import "./styles/CaseStudies.css";

const CaseStudies = ({ caseStudies, selectedCategory, setCaseStudies }) => {
  return (
    <div className="case-studies-container">
      {selectedCategory === "All"
        ? caseStudies.map((caseStudy) => {
            return (
              <CaseStudy
                key={caseStudy.id}
                caseImage={caseStudy.thumbnail}
                caseTitle={caseStudy.title}
                caseLink={caseStudy.link}
                caseExcerpt={caseStudy.excerpt}
                caseCategory={caseStudy.categories[0].title}
              />
            );
          })
        : caseStudies
            .filter(
              (caseStudy) => caseStudy.categories[0].title === selectedCategory
            )
            .map((caseStudy) => {
              return (
                <CaseStudy
                  key={caseStudy.id}
                  caseImage={caseStudy.thumbnail}
                  caseTitle={caseStudy.title}
                  caseLink={caseStudy.link}
                  caseExcerpt={caseStudy.excerpt}
                  caseCategory={caseStudy.categories[0].title}
                />
              );
            })}
    </div>
  );
};

export default CaseStudies;
