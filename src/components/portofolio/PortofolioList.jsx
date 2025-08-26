import { useEffect, useState } from "react";

import "./portofolio.css";
import PortofolioItem from "./PortofolioItem";
import { portofolioNav } from "../../constants/portofolio";

const PortofolioList = () => {
  const [portofolioList, setPortofolioList] = useState([]);
  const [activePortoData, setActivePortoData] = useState([]);
  const [activePortoNav, setActivePortoNav] = useState("All");

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/json/portofolios.json")
      .then((res) => res.json())
      .then((data) => setPortofolioList(data.filter((data) => data.isActive)))
      .catch((err) => console.error(err, "<<< ERROR FETCH CONTACT LIST"));
  }, []);

  useEffect(() => {
    if (activePortoNav === "All") {
      setActivePortoData(portofolioList);
    } else {
      const filteredPortoData = portofolioList.filter(
        (data) => data.category === activePortoNav
      );
      setActivePortoData(filteredPortoData);
    }
  }, [activePortoNav, portofolioList]);

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
