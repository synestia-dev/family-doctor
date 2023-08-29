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
import staff1 from "../../assets/staff1.jpg";
import staff2 from "../../assets/staff2.jpg";
import staff3 from "../../assets/staff3.jpg";
import staff5 from "../../assets/staff5.jpg";
import apple from "../../assets/apple.svg";
import friends1 from "../../assets/friends1.png";
import friends2 from "../../assets/friends2.png";
import friends3 from "../../assets/friends3.png";
import { useLayoutEffect, useState } from "react";

import { ReactComponent as RightArrow } from "./../../assets/icons/arrow-icon-right.svg";
import { ReactComponent as LeftArrow } from "./../../assets/icons/arrow-icon.svg";

import { useMediaQuery } from "../../hooks/useMediaQuery";

const About = () => {
  const { t } = useTranslation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [swiperRef, setSwiperRef] = useState(null);
  const [currentSlide, setSlide] = useState(1);
  const desktopMatches = useMediaQuery("(min-width: 768px)");
  const tabletMatches = useMediaQuery(
    "(min-width: 552px) and (max-width:768px)"
  );
  const mobileMatches = useMediaQuery("(max-width:552px)");

  console.log(desktopMatches, tabletMatches, mobileMatches);

  const slideTo = (index) => {
    swiperRef.slideTo(index === 0 ? 2 : index === 4 ? 0 : index - 1, 200);
    setSlide(index === 0 ? 3 : index === 4 ? 1 : index);
  };

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
                КНП “Клініка “Сімейний лікар” Широківської с/р – це комплексний
                підхід у наданні медичних послуг для населення усіх вікових
                груп. Наші спеціалісти надають допомогу пацієнтам від самого
                народження. Пацієнти спостерігаються у сімейних лікарів,
                проходять діагностичні обстеження, отримують консультації
                вузьких спеціалістів, та, за необхідності, отримують стаціонарне
                лікування.
              </p>
            </div>
            <div className="about__look">
              <h4>Наш погляд</h4>
              <p>
                Стати одним з найкращих медичних закладів в якості надання
                медичних послуг, створення комфорту та задоволення потреб
                пацієнтів на основі інноваційних технологій.
              </p>
            </div>
          </div>
          <nav className="about__nav">
            <div>
              <h3>Про нас</h3>
            </div>
            <div className="about__about">
              <Link to="/directions">{t("Напрямки")}</Link>
              <Link to="/for-companies">{t("Для компаній")}</Link>
              <Link to="/photogallery">{t("Фотогалерея")}</Link>
              <Link to="/doctors">{t("Лікарі")}</Link>
              <Link to="/contact">{t("Контакти")}</Link>
              <Link to="/news">{t("Новини")}</Link>
            </div>
          </nav>
          <div className="about__slider">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerView={1}
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
                <div>
                  <div
                    className="photo"
                    style={{ backgroundImage: `url(${staff1})` }}
                  ></div>
                  <img src={apple} alt="apple" className="icon" />
                </div>
                <h5>Шкабарня Ірина Валеріївна</h5>
                <span>
                  {" "}
                  генеральний директор, лікар загальної практики - сімейної
                  медицини, лікар-педіатр
                </span>
              </div>
            </div>
            <div className="about__staff_card">
              <div>
                <div>
                  <div
                    className="photo"
                    style={{ backgroundImage: `url(${staff2})` }}
                  ></div>
                  <img src={apple} alt="apple" className="icon" />
                </div>
                <h5>Сіталенко Тетяна Петрівна</h5>
                <span>
                  медичний директор, лікар-онколог, лікар-акушер-гінеколог
                </span>
              </div>
            </div>
            <div className="about__staff_card">
              <div>
                <div>
                  <div
                    className="photo"
                    style={{ backgroundImage: `url(${staff3})` }}
                  ></div>
                  <img src={apple} alt="apple" className="icon" />
                </div>
                <h5>Галіч Марина Аркадіївна</h5>
                <span>начальник фінансового відділу</span>
              </div>
            </div>
            <div className="about__staff_card">
              <div>
                <div>
                  <div
                    className="photo"
                    style={{ backgroundImage: `url(${staff5})` }}
                  ></div>
                  <img src={apple} alt="apple" className="icon" />
                </div>
                <h5>Кислинська Ганна Олександрівна</h5>
                <span>
                  заступник генерального директора з адміністративно-господарчої
                  частини
                </span>
              </div>
            </div>
            <div className="about__staff_card">
              <div>
                <div>
                  <div
                    className="photo"
                    style={{ backgroundImage: `url(${staff5})` }}
                  ></div>
                  <img src={apple} alt="apple" className="icon" />
                </div>
                <h5>Майборода Оксана Володимирівна</h5>
                <span>головна медична сестра</span>
              </div>
            </div>
          </div>
          <div className="about__wrapperShadow">
            <h2>{t("Наші друзі")}</h2>
            <div className="about__friends">
              <div className="container">
                <div className="about__friends_inner">
                  <div>
                    <img src={friends1} alt="friends1" />
                  </div>
                  <div>
                    <img src={friends2} alt="friends1" />
                  </div>
                  <div>
                    <img src={friends3} alt="friends1" />
                  </div>
                </div>
                <div className="about__friends_slider">
                  <button onClick={() => slideTo(currentSlide - 1)}>
                    <LeftArrow />
                  </button>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    className="friends-slider"
                    onSwiper={setSwiperRef}
                  >
                    <SwiperSlide>
                      <div>
                        <img src={friends1} alt="friends1" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <img src={friends2} alt="friends1" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <img src={friends3} alt="friends1" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <button onClick={() => slideTo(currentSlide + 1)}>
                    <RightArrow />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h2>{t("Відгуки наших клієнтів")}</h2>
          <div className="about__feedbacks">
            <Swiper
              slidesPerView={!mobileMatches ? (desktopMatches ? 1.5 : 1.2) : 1}
              spaceBetween={30}
              className="feedback-slider"
            >
              <SwiperSlide>
                <div className="feedback">
                  <div className="feedback__head">
                    <h6>Ольга Зубрицька</h6>
                    <img src={apple} alt="apple" />
                  </div>
                  <p>
                    Нещодавно проходила курс фізичної та психологічної
                    реабілітації у клініці «Сімейний лікар». Хочу подякувати
                    всій мультідисциплінарній команді фізичної та психологічної
                    реабілітації за доброзичливість, професіоналізм та
                    індивідуальний підхід до кожного пацієнта! Щиро дякую, Ви
                    найкращі
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feedback">
                  <div className="feedback__head">
                    <h6>Лариса Гузеева</h6>
                    <img src={apple} alt="apple" />
                  </div>
                  <p>
                    Хочу сказати дякую за такий широкий спектр послуг, яке ви
                    нам надаєте. Причому деякі з них – рідко де можна отримати.
                    Як, наприклад, рентгенографія шлунка із сульфатом барію.
                    Дуже прихильний до себе лікар, уважний медперсонал. Та й
                    сама клініка, загалом, помітно перетворилася: і ремонт, і
                    впорядковані входи в будівлю тієї ж хірургії – все говорить
                    про гарне керівництво, як адміністрації клініки, так і
                    громади загалом. Подальшого розвитку вам
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
