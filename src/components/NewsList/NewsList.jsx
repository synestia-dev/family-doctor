import "./NewsList.scss";
import NewsItem from "./NewsItem/NewsItem.jsx";
import { NEWS_DATA } from "../../assets/dummy/dummy-data.jsx";
import { Link } from "react-router-dom";
const NewsList = () => {
  return (
    <div className="newsList">
      <div className="container">
        <h2 className="newsList__title">Новини</h2>
        <div className="newsList__list">
          {NEWS_DATA.map((newsItem, index) => (
            <NewsItem
              id={newsItem.index}
              date={newsItem.date}
              image={newsItem.image}
              text={newsItem.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
