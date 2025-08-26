import { useEffect, useState } from "react";

import "./skills.css";
import SkillSection from "./SkillSection";

const SkillList = () => {
  const [backendSkills, setBackendSkills] = useState([]);
  const [frontendSkills, setFrontendSkills] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/json/backend_skills.json")
      .then((res) => res.json())
      .then((data) => setBackendSkills(data))
      .catch((err) => console.error(err, "<<< ERROR FETCH BACKEND SKILL"));
  }, []);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/json/frontend_skills.json")
      .then((res) => res.json())
      .then((data) => setFrontendSkills(data))
      .catch((err) => console.error(err, "<<< ERROR FETCH FRONTEND SKILL"));
  }, []);

  return (
    <>
      {/* Frontend */}
      <SkillSection
        skillType={frontendSkills}
        skillTitle={"Frontend Developer"}
      />

      {/* Backend */}
      <SkillSection
        skillType={backendSkills}
        skillTitle={"Backend Developer"}
      />
    </>
  );
};

export default SkillList;
