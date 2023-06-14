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
    height: "400px",
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
                <h2>Години роботи Сімейний Лікар</h2>
                <div className="contact__workhours_hours">
                  <div>
                    <span>Пн-Пт</span>
                    <span>8:00-20:00</span>
                  </div>
                  <div>
                    <span>Сб-Нд</span>
                    <span>9:00-17:00</span>
                  </div>
                </div>
              </div>
              <div className="contact__workhours_transport">
                <h3>Дістатися громадським транспортом?</h3>
                <p>
                  Сімейна Лікарня знаходиться за 200 м від станції Боржиславка,
                  за 10 хвилин від центру Праги.
                </p>
                <div className="contact__workhours_transport__transport">
                  <div>
                    <MetroIcon />
                    <div>
                      <p>Боржиславка - Трамвай</p>
                      <span>№ 20 и 26</span>
                    </div>
                  </div>
                  <div>
                    <MetroIcon />
                    <div>
                      <p>Боржиславка - Автобус</p>
                      <span>№ 108, 131, 161, 312, 316</span>
                    </div>
                  </div>
                </div>
                {/* <div className='mobile'>
									<div></div>
									<span>312, 316</span>
								</div> */}
              </div>
            </div>
            <img src={contact1} alt="contact" />
          </div>
          <div className="contact__bycar">
            <img src={contact2} alt="contact" />
            <div className="contact__bycar_info">
              <h3>Маршрут машиною</h3>
              <p>
                Ви можете припаркувати свій автомобіль поряд з клінікою ТУТ:
              </p>
              <div className="contact__bycar_info__parking">
                <div>
                  <div>1</div>
                  <div>
                    <p>
                      <span>Паркування Unicare</span> - обмежена кількість місць
                      для паркування (безкоштовно)
                    </p>
                  </div>
                </div>
                <div>
                  <div>2</div>
                  <div>
                    <p>
                      <span>Платне паркування</span> перед клінікою Cordeus
                      (1000 ГРН/год)
                    </p>
                  </div>
                </div>
                <div>
                  <div>3</div>
                  <div>
                    <p>
                      <span>Громадське паркування</span> на вулиці
                      Шевченко(безкоштовно)
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
            <h2>Реквізити для виставлення рахунку:</h2>
            <div className="contact__bank_details">
              <div>
                <p>Скорочена назва:</p>
                <p>КНП «КЛІНІКА «СІМЕЙНИЙ ЛІКАР» ШИРОКІВСЬКОЇ С/Р</p>
              </div>
              <div>
                <p>Повна назва:</p>
                <p>
                  КОМУНАЛЬНЕ НЕКОМЕРЦІЙНЕ ПІДПРИЄМСТВО «КЛІНІКА «СІМЕЙНИЙ ЛІКАР»
                  ШИРОКІВСЬКОЇ СІЛЬСЬКОЇ РАДИ Запорізького району Запорізької
                  області
                </p>
              </div>

              <div>
                <p>Юридична адреса:</p>
                <p>
                  70401, Запорізька обл., Запорізький р-н, с. Миколай-Поле, вул.
                  Центральна, будинок 46-А
                </p>
              </div>
              <div>
                <p>Поштова адреса:</p>
                <p>69089, Запорізька обл., м. Запоріжжя, вул. Лікарняна, 18</p>
              </div>
              <div>
                <p>Код ЄДРПОУ:</p>
                <p>02006722</p>
              </div>
              <div>
                <p>ІПН:</p>
                <p>020067208081</p>
              </div>
              <div>
                <p>Розрахунковий рахунок:</p>
                <p>
                  UA753133990000026005055756846 <br className="mobile" />
                  АТ КБ &quot;ПРИВАТБАНК&quot;
                </p>
              </div>
              <div>
                <p>МФО:</p>
                <p>313399</p>
              </div>
            </div>
          </div>
          <div className="contact__social">
            <h2>Зв&apos;язок/соціальні мережі</h2>
            <div className="contact__social_grid">
              <div>
                <h5>Пошта</h5>
                <p>shyroke_likar@ukr.net</p>
              </div>
              <div>
                <h5>приймальня генерального директора</h5>
                <p>(061) 764-87-03</p>
              </div>
              <div>
                <h5>фінансовий відділ</h5>
                <p>(061) 764-87-00</p>
              </div>
              <div>
                <h5>відділ кадрів</h5>
                <p>(061) 764-87-08</p>
              </div>
              <div>
                <h5>Call center</h5>
                <p>(073) 188-81-03</p>
              </div>
              <div>
                <h5>Call center</h5>
                <p>(073) 188-81-03</p>
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
