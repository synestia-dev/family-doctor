import "./About.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "../../swiper.css";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import staff from "../../assets/staff.jpeg";
import apple from "../../assets/apple.svg";
const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <section className="about">
        <div className="container">
          <h1>{t("Про нас")}</h1>
          <div className="about__desc">
            <div className="about__mission">
              <h4>Наша місія</h4>
              <p>
                Сімейний лікар пропонує медичні послуги сім&apos;ям, окремим
                особам та компаніям з найкращими медичними працівниками з чуйним
                та доброзичливим підходом. Ми з повагою ставимося до наших
                клієнтів та гарантуємо їм, що вони завжди можуть звернутися до
                нас, потребуючи медичної допомоги.
              </p>
            </div>
            <div className="about__look">
              <h4>Наш погляд</h4>
              <p>
                Сімейний лікар прагне стати найкращим постачальником медичних
                послуг для міжнародних клієнтів, які шукають приватну клініку
                преміум-класу з професійними лікарями та їх чуйним та
                доброзичливим підходом. Ми з радістю подбаємо про вас та членів
                вашої родини
              </p>
            </div>
          </div>
          <nav className="about__about">
            <Link to="/directions">{t("Напрямки")}</Link>
            <Link to="/for-companies">{t("Для компаній")}</Link>
            <Link to="/photogallery">{t("Фотогалерея")}</Link>
            <Link to="/doctors">{t("Лікарі")}</Link>
            <Link to="/contact">{t("Контакти")}</Link>
            <Link to="/news">{t("Новини")}</Link>
          </nav>
          <div className="about__slider">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img src={about1} alt="about1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={about2} alt="about1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={about1} alt="about1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={about2} alt="about1" />
              </SwiperSlide>
            </Swiper>
          </div>
          <h2>{t("Хто очолює Сімейний Лікар?")}</h2>
          <div className="about__staff">
            <div className="about__staff_card">
              <div>
                <img src={staff} alt="staff" className="photo" />
                <img src={apple} alt="apple" className="icon" />
              </div>
              <h5>Іващенко Владислав Валерійович</h5>
              <span>головний лікар напрямку &quot;Стоматологія&quot;</span>
            </div>
            <div className="about__staff_card">
              <div>
                <img src={staff} alt="staff" className="photo" />
                <img src={apple} alt="apple" className="icon" />
              </div>
              <h5>Іващенко Владислав Валерійович</h5>
              <span>головний лікар напрямку &quot;Стоматологія&quot;</span>
            </div>
            <div className="about__staff_card">
              <div>
                <img src={staff} alt="staff" className="photo" />
                <img src={apple} alt="apple" className="icon" />
              </div>
              <h5>Іващенко Владислав Валерійович</h5>
              <span>головний лікар напрямку &quot;Стоматологія&quot;</span>
            </div>
            <div className="about__staff_card">
              <div>
                <img src={staff} alt="staff" className="photo" />
                <img src={apple} alt="apple" className="icon" />
              </div>
              <h5>Іващенко Владислав Валерійович</h5>
              <span>головний лікар напрямку &quot;Стоматологія&quot;</span>
            </div>
            <div className="about__staff_card">
              <div>
                <img src={staff} alt="staff" className="photo" />
                <img src={apple} alt="apple" className="icon" />
              </div>
              <h5>Іващенко Владислав Валерійович</h5>
              <span>головний лікар напрямку &quot;Стоматологія&quot;</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
