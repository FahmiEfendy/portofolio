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
          <h1 className="Portofolio__Title">My Project</h1>
          <p className="Portofolio__Description">
            Below is a few example of my previous project in UI/UX Design and
            Website Development.
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
