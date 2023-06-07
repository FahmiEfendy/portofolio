import "./skills.css";
import SkillItem from "./SkillItem";

const SkillList = () => {
  return (
    <>
      {/* Frontend */}
      <div className="skills__content">
        <h3 className="skills__title">Frontend Developer</h3>

        <div className="skills__box">
          <div className="skills__group">
            <SkillItem name="HTML" level="Intermediate" />
            <SkillItem name="CSS" level="Basic" />
            <SkillItem name="JavaScript" level="Intermediate" />
          </div>
          <div className="skills__group">
            <SkillItem name="Git" level="Basic" />
            <SkillItem name="React" level="Intermediate" />
            <SkillItem name="Material UI" level="Intermediate" />
          </div>
        </div>
      </div>

      {/* Backend */}
      <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>

        <div className="skills__box">
          <div className="skills__group">
            <SkillItem name="Node.js" level="Basic" />
            <SkillItem name="Express.js" level="Basic" />
            <SkillItem name="MongoDB" level="Basic" />
          </div>
          <div className="skills__group">
            <SkillItem name="MySQL" level="Basic" />
            <SkillItem name="cPanel" level="Basic" />
            <SkillItem name="Firebase" level="Basic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillList;
