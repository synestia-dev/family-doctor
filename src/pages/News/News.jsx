import "./News.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NewsList from "../../components/NewsList/NewsList";
const News = () => {
  return (
    <>
      <Header />
      <NewsList />
      <Footer />
    </>
  );
};

export default News;
