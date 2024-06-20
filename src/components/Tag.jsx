import "./Tag.scss";

const Tag = ({tag}) => {
  return (
    <div className="tag-wrapper">
      <h3 className="tag">{tag}</h3>
    </div>
  );
};

export default Tag;
