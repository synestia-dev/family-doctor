import "./News.scss";
import NewsItem from "./NewsItem/NewsItem.jsx";
import image1 from "../../../../assets/news/image-1.png";
import image2 from "../../../../assets/news/image-2.png";
import image3 from "../../../../assets/news/image-3.png";
import image4 from "../../../../assets/news/image-4.png";
import image5 from "../../../../assets/news/image-5.png";
import image6 from "../../../../assets/news/image-6.png";
const NEWS_DATA = [
  {
    index: 0,
    date: "19.05.23",
    image: image1,
    text: "Вы страдаете от хронических головных болей?",
  },
  {
    index: 1,
    date: "19.05.23",
    image: image2,
    text: "Вы страдаете от хронических головных болей?2",
  },
  {
    index: 2,
    date: "19.05.23",
    image: image3,
    text: "Вы страдаете от хронических головных болей?3",
  },
  {
    index: 3,
    date: "19.05.23",
    image: image4,
    text: "Вы страдаете от хронических головных болей?4",
  },
  {
    index: 4,
    date: "19.05.23",
    image: image5,
    text: "Вы страдаете от хронических головных болей?5",
  },
  {
    index: 5,
    date: "19.05.23",
    image: image6,
    text: "Вы страдаете от хронических головных болей?6",
  },
];
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
      </div>
    </div>
  );
};

export default News;
