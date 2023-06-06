import "./NewsList.scss";
import NewsItem from "./NewsItem/NewsItem.jsx";
import Button from "../Button/Button";
import { NEWS_DATA } from "../../assets/dummy/dummy-data.jsx";
const NewsList = () => {
  return (
    <div className="newsList">
      <div className="container">
        <h2 className="newsList__title">Новини</h2>
        <div className="newsList__list">
          {NEWS_DATA.map((newsItem, index) => (
            <NewsItem
              key={index}
              date={newsItem.date}
              image={newsItem.image}
              text={newsItem.text}
            />
          ))}
        </div>
        <Button to="/news" text="Усі наші статті" color="articles" />
      </div>
    </div>
  );
};

export default NewsList;
