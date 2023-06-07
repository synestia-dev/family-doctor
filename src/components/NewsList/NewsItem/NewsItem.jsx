import "./NewsItem.scss";
import { Link } from "react-router-dom";
const NewsItem = ({ date, image, title, id }) => {
  return (
    <Link to={`/news/${id}`} className="item">
      <div className="item__date">{date}</div>
      <img src={image} alt={image} />
      <p className="item__text">{title}</p>
    </Link>
  );
};

export default NewsItem;
