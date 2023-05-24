import "./News.scss";
import NewsItem from "./NewsItem/NewsItem.jsx";
const News = () => {
  return (
    <div className="news">
      <div className="container">
        <h2 className="news__title">Новини</h2>
        <div className="news__list">
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      </div>
    </div>
  );
};

export default News;
