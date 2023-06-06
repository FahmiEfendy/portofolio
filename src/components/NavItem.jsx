import "./navbar.css";

const NavItem = (props) => {
  const { href, icon, text, isLinkActive } = props;

  return (
    <li className="nav__item">
      <a href={href} className={`nav__link ${isLinkActive && "active-link"}`}>
        <i className={`uil uil-${icon} nav__icon`}></i>
        {text}
      </a>
    </li>
  );
};

export default NavItem;
