import { useState } from "react";

import "./navbar.css";
import NavItem from "./NavItem";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeNavbar, setActiveNavbar] = useState("#home");

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });

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
              activeNavbar={activeNavbar}
              setActiveNavbar={setActiveNavbar}
            />
            <NavItem
              href="#skills"
              icon="file-alt"
              text="Skills"
              activeNavbar={activeNavbar}
              setActiveNavbar={setActiveNavbar}
            />
            <NavItem
              href="#qualification"
              icon="scenery"
              text="Qualification"
              activeNavbar={activeNavbar}
              setActiveNavbar={setActiveNavbar}
            />
            <NavItem
              href="#contact"
              icon="message"
              text="Contact"
              activeNavbar={activeNavbar}
              setActiveNavbar={setActiveNavbar}
            />
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
