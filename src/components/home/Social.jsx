import { Fragment, useEffect, useState } from "react";

import "./home.css";

const Social = () => {
  const [socialList, setSocialList] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/json/socials.json")
      .then((res) => res.json())
      .then((data) => setSocialList(data))
      .catch((err) => console.error(err, "<<< ERROR FETCH SOCIAL LIST"));
  }, []);

  return (
    <div className="home__social">
      {socialList.map((list, index) => (
        <Fragment key={index}>
          <a
            href={list.href}
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className={list.icon}></i>
          </a>
        </Fragment>
      ))}
    </div>
  );
};

export default Social;
