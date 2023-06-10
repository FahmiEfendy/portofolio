import "./portofolio.css";

const Item = (props) => {
  const { id, image, title, href = "" } = props.data;

  return (
    <div key={id} className="portofolio__card">
      <img src={image} alt={title} className="portofolio__img" />
      <h3 className="portofolio__title">{title}</h3>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="portofolio__button"
      >
        View More{" "}
        <i className="bx bx-right-arrow-alt portofolio__button-icon"></i>
      </a>
    </div>
  );
};

export default Item;
