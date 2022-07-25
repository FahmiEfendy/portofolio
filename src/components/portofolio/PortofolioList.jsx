import "./portofolioList.css";

const PortofolioList = ({ img, link }) => {
  return (
    <div className="PortofolioList">
      <div className="PortofolioList__Browser">
        <div className="PortofolioList__Circle"></div>
        <div className="PortofolioList__Circle"></div>
        <div className="PortofolioList__Circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="PortofolioList__Image" />
      </a>
    </div>
  );
};

export default PortofolioList;
