import "./navbar.css";

const NavItem = (props) => {
  const { href, icon, text, activeNavbar, setActiveNavbar } = props;

  return (
    <li className="nav__item">
      <a
        href={href}
        className={`nav__link ${activeNavbar === href && "active-link"}`}
        onClick={() => {
          setActiveNavbar(href);
        }}
      >
        <i className={`uil uil-${icon} nav__icon`}></i>
        {text}
      </a>
    </li>
  );
};

export default NavItem;
