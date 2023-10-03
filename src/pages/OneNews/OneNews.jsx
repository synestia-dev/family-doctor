import "./OneNews.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button.jsx";
import { getRequest } from "../../api";
import { useState, useEffect, useLayoutEffect } from "react";
import Loader from "../../components/Loader/Loader";
import Markdown from "markdown-to-jsx";

const OneNews = () => {
  const { id } = useParams();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest(`news/${id}?populate=image`);
        if (response && response.data) {
          console.log(response.data);
          return setNews(response.data);
        }
      } catch (error) {
        console.log("Error fetching directions data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <section className="oneNews">
        <div className="container">
          {isLoading ? (
            <div className="loader">
              <Loader />
            </div>
          ) : (
            <div className="oneNews__content">
              <img src={news?.attributes.image?.data[0].attributes.url} alt={news?.attributes.image?.data[0].attributes.name} className="oneNews__image" />
              <h1>{news?.attributes.title}</h1>
              <div className="oneNews__text">
                <Markdown>{news?.attributes.description}</Markdown>
              </div>
            </div>
          )}
        </div>
        <Button to="/news" text="Назад до всіх статей" color="back-to" />
      </section>
      <Footer />
    </>
  );
};

export default OneNews;
