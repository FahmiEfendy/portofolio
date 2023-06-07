import "./skills.css";

const SkillItem = (props) => {
  const { name, level } = props;

  return (
    <div className="skills__data">
      <i className="bx bxs-badge-check"></i>

      <div>
        <h3 className="skills__name">{name}</h3>
        <span className="skills__level">{level}</span>
      </div>
    </div>
  );
};

export default SkillItem;
