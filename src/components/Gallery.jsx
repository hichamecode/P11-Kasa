import "./Gallery.scss";
import Thumbnail from "./Thumbnail";
import data from "../datas/data.json";

const Gallery = () => {
  return (
    <div className="gallery">
      {data.map((item) => (

        <Thumbnail 
            key={item.id}
            id={item.id}
            title = {item.title}
            cover = {item.cover}
        />
      ))}
    </div>
  );
};

export default Gallery;

