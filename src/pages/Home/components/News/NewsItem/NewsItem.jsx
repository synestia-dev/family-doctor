import "./NewsItem.scss";
import PropTypes from "prop-types";
const NewsItem = ({ date, image, text }) => {
  return (
    <div className="item">
      <div className="item__date">{date}</div>
      <img src={image} alt={image} />
      <p className="item__text">{text}</p>
    </div>
  );
};
NewsItem.propTypes = {
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NewsItem;
