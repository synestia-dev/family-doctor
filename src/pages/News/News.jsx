import "./News.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NewsList from "../../components/NewsList/NewsList";
import { useLayoutEffect } from "react";
const News = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <section className="news">
        <NewsList />
      </section>
      <Footer />
    </>
  );
};

export default News;
