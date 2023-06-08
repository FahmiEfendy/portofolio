import { useEffect, useState } from "react";

import "./portofolio.css";
import PortofolioItem from "./PortofolioItem";
import { portofolioData, portofolioNav } from "../../data/data";

const PortofolioList = () => {
  const [activePortoNav, setActivePortoNav] = useState("all");
  const [activePortoData, setActivePortoData] = useState([]);

  useEffect(() => {
    if (activePortoNav === "all") {
      setActivePortoData(portofolioData);
    } else {
      const filteredPortoData = portofolioData.filter(
        (data) => data.category.toLowerCase() === activePortoNav
      );
      setActivePortoData(filteredPortoData);
    }
  }, [activePortoNav]);

  return (
    <>
      {/* Portofolio Navbar */}
      <div className="portofolio__filters">
        {portofolioNav.map((nav, index) => {
          return (
            <span
              className={`portofolio__item ${
                activePortoNav === nav.name && "active-portofolio"
              }`}
              key={index}
              onClick={() => {
                setActivePortoNav(nav.name);
              }}
            >
              {nav.name}
            </span>
          );
        })}
      </div>

      {/* Portofolio Data */}
      <div className="portofolio__container container grid">
        {activePortoData.map((data) => {
          return <PortofolioItem key={data.id} data={data} />;
        })}
      </div>
    </>
  );
};

export default PortofolioList;
