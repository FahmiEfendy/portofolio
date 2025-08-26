import SkillItem from "./SkillItem";

const SkillSection = (props) => {
  const { skillType, skillTitle } = props;

  return (
    <div className="skills__content">
      <h3 className="skills__title">{skillTitle}</h3>

      <div className="skills__box">
        <div className="skills__group">
          {skillType.slice(0, 3).map((skill, index) => (
            <SkillItem key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
        <div className="skills__group">
          {skillType.slice(3).map((skill, index) => (
            <SkillItem key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
