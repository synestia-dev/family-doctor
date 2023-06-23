import "./Contact.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { useTranslation } from "react-i18next";
import contact1 from "../../assets/contact1.png";
import contact2 from "../../assets/contact2.png";
import { ReactComponent as MetroIcon } from "../../assets/metroTablet.svg";
import { BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { useLayoutEffect } from "react";

import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const Map = ({ location, zoom }) => {
  const containerStyle = {
    width: "100%",
    height: window.innerWidth <= 400 ? "350px" : "400px",
  };

  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  const markerPosition = {
    lat: location.lat,
    lng: location.lng,
  };

  return (
    <div className="contact__map">
      <LoadScript
        googleMapsApiKey={import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={options}
        >
          <MarkerF position={markerPosition} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
const Contact = () => {
  const { t } = useTranslation();
  const location = {
    address: "Simeynyy Likar",
    lat: 47.862215751296155,
    lng: 35.00840930791667,
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <section className="contact">
        <div className="container">
          <h1>{t("Контакти")}</h1>
          <div className="contact__workhours">
            <div className="contact__workhours_info">
              <div>
                <h2>{t("Години роботи Сімейний Лікар")}</h2>
                <div className="contact__workhours_hours">
                  <div>
                    <span>{t("Пн.-Пт.")}</span>
                    <span>{t("8:00-20:00")}</span>
                  </div>
                  <div>
                    <span>{t("Сб.")}</span>
                    <span>{t("9:00-13:00")}</span>
                  </div>
                  <div>
                    <span>{t("Неділя")}</span>
                    <span>{t("Вихідний")}</span>
                  </div>
                </div>
              </div>
              <div className="contact__workhours_transport">
                <h3>{t("Дістатися громадським транспортом:")}</h3>
                <p>{t("Верхня Хортиця, зупинка Районний Будинок Культури.")}</p>
                <div className="contact__workhours_transport__transport">
                  <div>
                    <MetroIcon />
                    <div>
                      <p>{t("Міський транспорт -")}</p>
                      <span>№ 66, 49, 76, 47, 75</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src={contact1} alt="contact" />
          </div>
          <div className="contact__bycar">
            <img src={contact2} alt="contact" />
            <div className="contact__bycar_info">
              <h3>{t("Маршрут машиною")}</h3>
              <p>
                {t(
                  "Ви можете припаркувати свій автомобіль поряд з клінікою ТУТ:"
                )}
              </p>
              <div className="contact__bycar_info__parking">
                <div>
                  <div>1</div>
                  <div>
                    <p>
                      <span>{t("Паркування Unicare")}</span> -{" "}
                      {t(
                        "обмежена кількість місць для паркування (безкоштовно)"
                      )}
                    </p>
                  </div>
                </div>
                <div>
                  <div>2</div>
                  <div>
                    <p>
                      <span>{t("Платне паркування")}</span>{" "}
                      {t("перед клінікою Cordeus (1000 ГРН/год)")}
                    </p>
                  </div>
                </div>
                <div>
                  <div>3</div>
                  <div>
                    <p>
                      <span>{t("Громадське паркування")}</span>{" "}
                      {t("на вулиці Шевченко (безкоштовно)")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact__map">
            <Map location={location} zoom={17} />
          </div>
          <div className="contact__bank">
            <h2>{t("Реквізити для виставлення рахунку")}:</h2>
            <div className="contact__bank_details">
              <div>
                <p>{t("Скорочена назва:")}</p>
                <p>{t("КНП «КЛІНІКА «СІМЕЙНИЙ ЛІКАР» ШИРОКІВСЬКОЇ С/Р")}</p>
              </div>
              <div>
                <p>{t("Повна назва:")}</p>
                <p>
                  {t(
                    "КОМУНАЛЬНЕ НЕКОМЕРЦІЙНЕ ПІДПРИЄМСТВО «КЛІНІКА «СІМЕЙНИЙ ЛІКАР» ШИРОКІВСЬКОЇ СІЛЬСЬКОЇ РАДИ Запорізького району Запорізької області"
                  )}
                </p>
              </div>

              <div>
                <p>{t("Юридична адреса:")}</p>

                <p>
                  {t(
                    "70401, Запорізька обл., Запорізький р-н, с. Миколай-Поле, вул. Центральна, будинок 46-А"
                  )}
                </p>
              </div>
              <div>
                <p>{t("Поштова адреса:")}</p>
                <p>
                  {t(
                    "69089, Запорізька обл., м. Запоріжжя, вул. Лікарняна, 18"
                  )}
                </p>
              </div>
              <div>
                <p>{t("Код ЄДРПОУ:")}</p>
                <p>02006722</p>
              </div>
              <div>
                <p>{t("ІПН")}:</p>
                <p>020067208081</p>
              </div>
              <div>
                <p>{t("Розрахунковий рахунок:")}</p>
                <p>
                  {t("Розрахунковий рахунок:")}
                  <br className="mobile" />
                  UA753133990000026005055756846
                  <br />
                  {t('АТ КБ "ПРИВАТБАНК"')}
                </p>
              </div>
              <div>
                <p>{t("МФО")}:</p>
                <p>313399</p>
              </div>
            </div>
          </div>
          <div className="contact__social">
            <h2>{t("Зв'язок/соціальні мережі")}</h2>
            <div className="contact__social_grid">
              <div>
                <h5>{t("Пошта")}</h5>
                <a href="mailto:shyroke_likar@ukr.net" className="contacts">
                  <p>shyroke_likar@ukr.net</p>
                </a>
              </div>
              <div>
                <h5>{t("Реєстратура")}</h5>
                <a href="tel:+380731888103" className="contacts">
                  <p>(073) 188-81-03</p>
                </a>
              </div>
              <div>
                <h5>{t("Реєстратура")}</h5>
                <a href="tel:+380961888003" className="contacts">
                  <p>(096) 188-80-03</p>
                </a>
              </div>
              <div>
                <h5>{t("Реєстратура")}</h5>
                <a href="tel:+380991888003" className="contacts">
                  <p>(099) 188-80-03</p>
                </a>
              </div>
              <div>
                <h5>{t("Приймальня ген. директора")}</h5>
                <a href="tel:+380617648703" className="contacts">
                  <p>(061) 764-87-03</p>
                </a>
              </div>
              <div>
                <h5>{t("Відділ кадрів")}</h5>
                <a href="tel:+380617648708" className="contacts">
                  <p>(061) 764-87-08</p>
                </a>
              </div>
            </div>
            <div className="contact__social_links">
              <a href="">
                <RiInstagramFill color="#ee2922" />
              </a>
              <a href="">
                <BsTelegram color="#ee2922" />
              </a>
              <a href="">
                <BsFacebook color="#ee2922" />
              </a>
              <a href="">
                <BsInstagram color="#ee2922" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
