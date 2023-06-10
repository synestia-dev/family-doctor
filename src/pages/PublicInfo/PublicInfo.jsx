import "./PublicInfo.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import photoNews from "../../assets/icons/news-photo.png";
import Button from "../../components/Button/Button.jsx";
import { useLayoutEffect } from "react";
const PublicInfo = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <section className="publicInfo">
        <div className="container">
          <div className="publicInfo__content">
            <h1>
              Доступ до публічної <br /> інформації
            </h1>
            <div>
              <h3>Законодавча база</h3>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PublicInfo;
