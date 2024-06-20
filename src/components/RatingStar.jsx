import "./RatingStar.scss";
import ratingStar from "./../assets/rating-star.svg";

const RatingStar = ({ ratingOfRent }) => {
    const rating = (parseInt(ratingOfRent)); 

    return (
      <div className="rating-container">
        {Array.from({ length: rating }).map((_, index) => (
          <li key={index} className="rating-star rating-star-liked">
            <img src={ratingStar} alt="rating star liked" />
          </li>
        ))}
     {Array.from({ length: 5 - rating }).map((_, index) => (
          <li key={index} className="rating-star">
            <img src={ratingStar} alt="rating star" />
          </li>
        ))}
      </div>
    );
  };
  
export default RatingStar;

