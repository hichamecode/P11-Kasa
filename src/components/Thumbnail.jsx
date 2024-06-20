import "./Thumbnail.scss";

const Thumbnail = ({ id, title, cover }) => {
  return (
      <a className="thumbnail-wrapper" href={`/Rent/${id}`}>
        <img src={cover} alt={title} className="thumbnail"/>
        <h3 className="thumbnail-title">{title}</h3>
      </a>
  );
};

export default Thumbnail;
