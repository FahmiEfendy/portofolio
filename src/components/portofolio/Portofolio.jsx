import "./portofolio.css";
import PortofolioList from "./PortofolioList";
import { portofolioList } from "../../data";

const Portofolio = () => {
  return (
    <div className="Portofolio__Container">
      <div className="Portofolio__Background"></div>
      <div className="Portofolio__Background"></div>
      <div className="Portofolio__Background"></div>
      <div className="Portofolio">
        <div className="Portofolio__Text">
          <h1 className="Portofolio__Title">My Work</h1>
          <p className="Portofolio__Description">
            This is example of my UI/UX Design and Web Developer work
          </p>
        </div>
        <div className="Portofolio__List">
          {portofolioList.map((item) => (
            <PortofolioList key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
