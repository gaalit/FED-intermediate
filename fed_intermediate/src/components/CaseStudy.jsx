import React from "react";
import "./styles/CaseStudy.css";
import { BsArrowRightShort } from "react-icons/bs";

const CaseStudy = ({
  caseImage,
  caseTitle,
  caseLink,
  caseExcerpt,
  caseCategory,
}) => {
  return (
    <div className="case-study-container">
      <div className="case-study-image-wraper">
        <img src={caseImage} alt="case-study-image" />
      </div>

      <div className="case-study-info-container">
        <div className="case-study-category-container">
          <span>{caseCategory}</span>
        </div>

        <div className="case-study-details-container">
          <h2>{caseTitle}</h2>
          <p>{caseExcerpt}</p>
          <div className="case-study-link-container">
            <button>
              <a href={caseLink}>view case study</a>
              <BsArrowRightShort />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
