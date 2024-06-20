import "./Banner.scss";

const Banner = ({title, imageUrl}) => {
  return (
    <div className="banner-container">
      <div className={"banner-wrapper "}>
        <img src={imageUrl} className={"banner-image "} alt="Banner" />
      </div>

      {title && <p className="banner-motto">{title}</p>}
    </div>
  );
};

export default Banner;

