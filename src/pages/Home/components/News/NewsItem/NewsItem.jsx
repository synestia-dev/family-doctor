import "./NewsItem.scss";
import news from "../../../../../assets/icons/news.png";
const NewsItem = () => {
  return (
    <div className="item">
      <div className="item__corner">19.05.23</div>
      <img src={news} alt={news} />
      <p className="item__text">Вы страдаете от хронических головных болей?</p>
    </div>
  );
};

export default NewsItem;
