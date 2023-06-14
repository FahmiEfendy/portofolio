import "./qualification.css";

const QualifcationList = (props) => {
  const { title, subtitle, date, right } = props;

  return (
    <div className="qualification__data">
      {right && (
        <>
          <div></div>
          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
        </>
      )}

      <div>
        <h3 className="qualification__title">{title}</h3>
        <span className="qualification__subtitle">{subtitle}</span>
        <div className="qualification__calendar">
          <i className="uil uil-calendar-alt"></i> {date}
        </div>
      </div>

      {!right && (
        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>
      )}
    </div>
  );
};

export default QualifcationList;
