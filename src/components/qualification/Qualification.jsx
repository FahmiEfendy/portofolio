import { useEffect, useState } from "react";

import "./qualification.css";
import QualificationList from "./QualificationList";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);

  useEffect(() => {
    fetch("/json/educations.json")
      .then((res) => res.json())
      .then((data) => setEducationList(data))
      .catch((err) => console.error(err, "<<< ERROR FETCH EDUCATION LIST"));
  }, []);

  useEffect(() => {
    fetch("/json/experiences.json")
      .then((res) => res.json())
      .then((data) => setExperienceList(data))
      .catch((err) => console.error(err, "<<< ERROR FETCH EXPERIENCE LIST"));
  }, []);

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
            {educationList.map((list, index) => (
              <QualificationList
                key={index}
                title={list.title}
                subtitle={list.subtitle}
                date={list.date}
                right={index % 2 === 1}
              />
            ))}
          </div>
        </div>

        {/* Experience List */}
        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              activeTab === 1 && "qualification__content-active"
            }`}
          >
            {experienceList.map((list, index) => (
              <QualificationList
                key={index}
                title={list.title}
                subtitle={list.subtitle}
                date={list.date}
                right={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
