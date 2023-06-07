import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Fahmi</h1>

        <div className="footer__social">
          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/fahmi-efendy/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>

          {/* Github */}
          <a
            href="https://github.com/fahmiefendy"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/fahmiefendy_/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; FahmiEfendy. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
