const ContactItem = (props) => {
  const { title, icon, detail, href } = props;

  return (
    <div className="contact__card">
      <div className={icon}></div>

      <h3 className="contact__card-title ">{title}</h3>
      <span className="contact__card-data">{detail}</span>

      <a
        href={href}
        className="contact__button"
        target="_blank"
        rel="noreferrer"
      >
        Contact me{" "}
        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
      </a>
    </div>
  );
};

export default ContactItem;
