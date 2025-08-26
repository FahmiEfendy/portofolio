import { useEffect, useState } from "react";

import "./footer.css";

const Footer = () => {
  const [socialList, setSocialList] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/json/socials.json")
      .then((res) => res.json())
      .then((data) => setSocialList(data))
      .catch((err) => console.error(err, "<<< ERROR FETCH SOCIAL LIST"));
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Fahmi</h1>

        <div className="footer__social">
          {socialList.map((list, index) => (
            <a
              key={index}
              href={list.href}
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className={list.iconFooter}></i>
            </a>
          ))}
        </div>

        <span className="footer__copy">
          &#169; FahmiEfendy. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
