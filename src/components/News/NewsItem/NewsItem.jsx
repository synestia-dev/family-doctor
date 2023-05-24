import "./NewsItem.scss";
import news from "../../../assets/icons/news.png";
const NewsItem = () => {
  return (
    <div className="item">
      <div className="item__info">
        <img src={news} alt={news} />
        <p className="item__text">
          Вы страдаете от хронических головных болей?
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
