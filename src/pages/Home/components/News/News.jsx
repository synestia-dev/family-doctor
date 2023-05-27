import "./News.scss";
import NewsItem from "./NewsItem/NewsItem.jsx";
import Button from "../../../../components/Button/Button";
import { NEWS_DATA } from "../../../../assets/dummy/dummy-data.jsx";
const News = () => {
  return (
    <div className="news">
      <div className="container">
        <h2 className="news__title">Новини</h2>
        <div className="news__list">
          {NEWS_DATA.map((newsItem, index) => (
            <NewsItem
              key={index}
              date={newsItem.date}
              image={newsItem.image}
              text={newsItem.text}
            />
          ))}
        </div>
        <Button to="" text="Усі наші статті" color="articles" />
      </div>
    </div>
  );
};

export default News;
