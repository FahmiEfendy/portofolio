import "./portofolio.css";
import PortofolioList from "./PortofolioList";

const Portofolio = () => {
  return (
    <section className="portofolio section" id="portofolio">
      <h2 className="section__title">Portofolio</h2>
      <span className="section__subtitle">My Recent Works</span>

      <PortofolioList />
    </section>
  );
};

export default Portofolio;
