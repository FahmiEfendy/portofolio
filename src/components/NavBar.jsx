import { useState } from "react";

import "./navbar.css";
import NavItem from "./NavItem";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Fahmi
        </a>

        <div className={`nav__menu ${showNavbar && "show-navbar"}`}>
          <ul className="nav__list grid">
            <NavItem
              href="#home"
              icon="estate"
              text="Home"
              isLinkActive={true}
            />
            <NavItem href="#about" icon="user" text="About" />
            <NavItem href="#skills" icon="file-alt" text="Skills" />
            <NavItem href="#portofolio" icon="scenery" text="Portofolio" />
            <NavItem href="#contact" icon="message" text="Contact" />
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setShowNavbar(!showNavbar)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setShowNavbar(!showNavbar)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
