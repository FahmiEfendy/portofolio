import "./portofolio.css";

const Item = (props) => {
  const { id, image, title } = props.data;

  return (
    <div key={id} className="portofolio__card">
      <img src={image} alt={title} className="portofolio__img" />
      <h3 className="portofolio__title">{title}</h3>
      <a href={`/${title}`} className="portofolio__button">
        Demo <i className="bx bx-right-arrow-alt portofolio__button-icon"></i>
      </a>
    </div>
  );
};

export default Item;
