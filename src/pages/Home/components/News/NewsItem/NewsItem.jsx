import "./NewsItem.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NewsItem = ({ date, image, text }) => {
  return (
    <Link to="/">
      <div className="item">
        <div className="item__date">{date}</div>
        <img src={image} alt={image} />
        <p className="item__text">{text}</p>
      </div>
    </Link>
  );
};
NewsItem.propTypes = {
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NewsItem;
