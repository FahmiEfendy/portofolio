import "./home.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/fahmi-efendy/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/fahmiefendy"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.instagram.com/fahmiefendy_/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
    </div>
  );
};

export default Social;
