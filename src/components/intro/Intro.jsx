import "./intro.css";
import Profile from "../../img/profile.png";

const Intro = () => {
  return (
    <div className="Intro">
      <div className="Intro__Left">
        <div className="Intro__Left-Wrapper">
          <p className="Intro__Opening">Hello, My name is</p>
          <h1 className="Intro__Name">Fahmi Efendy</h1>
          <div className="Intro__Title">
            <div className="Intro__Title-Wrapper">
              <div className="Intro__Title-Item">Website Developer</div>
              <div className="Intro__Title-Item">UI/UX Developer</div>
            </div>
          </div>
          <p className="Intro__Description">
            I design and develop services for customers of all sizes,
            specializing in credit stylish, modern websites, web services and
            online stores.
          </p>
        </div>
      </div>
      <div className="Intro__Right">
        <div className="Intro__Image-Background"></div>
        <img src={Profile} alt="My Profile" className="Intro__Image" />
      </div>
    </div>
  );
};

export default Intro;
