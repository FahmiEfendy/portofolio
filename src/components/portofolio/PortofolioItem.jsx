import "./portofolio.css";

const Item = (props) => {
  const {
    id,
    image,
    title,
    href = "",
    tags,
    category,
    externalLinks,
  } = props.data;

  return (
    <div key={id} className="portofolio__card">
      <img
        src={process.env.PUBLIC_URL + "/" + image}
        alt={title}
        className="portofolio__img"
      />
      <h3 className="portofolio__title">{title}</h3>
      <div>
        {tags.map((tag, index) => (
          <span key={index} className="portofolio__tag">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="portofolio__button"
      >
        {`View ${category === "Website" ? "Website" : "Design"} `}
        <i className="bx bx-right-arrow-alt portofolio__button-icon"></i>
      </a>
      <div>
        {externalLinks?.map((link, index) => (
          <span
            key={index}
            className="portofolio__links"
            onClick={() => window.open(link.href, "_blank")}
            style={{ cursor: "pointer" }}
          >
            {link.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Item;
