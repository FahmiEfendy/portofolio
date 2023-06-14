import { useState } from "react";

import "./qualification.css";
import QualificationList from "./QualificationList";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {/* Education */}
          <div
            className={`qualification__button button--flex ${
              activeTab === 0 && "qualification__active"
            }`}
            onClick={() => setActiveTab(0)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          {/* Experience */}
          <div
            className={`qualification__button button--flex ${
              activeTab === 1 && "qualification__active"
            }`}
            onClick={() => setActiveTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        {/* Education List */}
        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              activeTab === 0 && "qualification__content-active"
            }`}
          >
            <QualificationList
              title="Bina Nusantara Bandung University"
              subtitle="Bachelor of Computer Science - GPA 3.56"
              date="2019 - 2023"
            />
            <QualificationList
              title="2nd Vocational High School of Pangkal Pinang"
              subtitle="Computer and Network Engineering"
              date="2016 - 2019"
              right
            />
          </div>
        </div>

        {/* Experience List */}
        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              activeTab === 1 && "qualification__content-active"
            }`}
          >
            <QualificationList
              title="Department of Communications and Informatics - Pangkal Pinang, Indonesia"
              subtitle="Computer and Network Engineer"
              date="Jan 2018 - Mar 2018"
            />
            <QualificationList
              title="Systeric - Software Development Agency - Bali, Indonesia"
              subtitle="Front End Developer"
              date="May 2022 - Feb 2023"
              right
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
