import "./OneNews.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
const OneNews = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <section className="oneNews">
        <div className="container">News #{id}</div>
      </section>
      <Footer />
    </>
  );
};

export default OneNews;
