import "./Footer.scss";
import footerLogo from "../../assets/icons/footer-logo.svg";
import geo from "../../assets/icons/geo.svg";
import phone from "../../assets/icons/phone.svg";
import mail from "../../assets/icons/mail.svg";
import { BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="row__item">
            <h6 className="row__title">Час роботи</h6>
            <div className="schedule">
              <div>Пн-Пт:</div>
              <div>8:00-20:00</div>
              <div>Сб-Нд:</div>
              <div>9:00-15:00</div>
            </div>
            <h6 className="address ">Адреса</h6>
            <div className="address__inner">
              <p className="address__info">
                <img src={geo} alt="geo" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=%D0%BC.+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F%2C+%D0%B2%D1%83%D0%BB.+%D0%9B%D1%96%D0%BA%D0%B0%D1%80%D0%BD%D1%8F%D0%BD%D0%B0%2C+18."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  м. Запоріжжя, вул. Лікарняна, 18.
                </a>
              </p>
              <a href="/contacts/#map" className="address__info_map">
                Показать на карте
              </a>
            </div>
          </div>
          <div className="row__item">
            <h6 className="row__title">Про нас</h6>
            <nav>
              <ul className="about__list">
                <li>
                  <Link to="/about">Клініка</Link>
                </li>
                <li>
                  <Link to="/photogallery">Фотогалерея</Link>
                </li>
                <li>
                  <Link to="/news">Новини</Link>
                </li>
                <li>
                  <Link to="/doctors" className="">
                    Наша команда
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="row__item">
            <h6 className="row__title">Контакти</h6>
            <a href="tel:+380991888003" className="contacts">
              <img src={phone} alt={phone} />
              <span className="contacts__item">
              +38 (099) 18 88 003<br />
              </span>
              <span className="contacts__item_mobile">+38 (061) 764-87-03</span>
            </a>
            <br />
            <a href="tel:+38096188800" className="contacts">
              <img src={phone} alt={phone} />
              <p className="contacts__item">
              +38 (096) 18 88 003 <br />
              </p>
              <span className="contacts__item_mobile">
              +38 (073) 18 88 003{" "}
              </span>
            </a>
            <br />
            <a href="mailto:Shyroke_likar@ukr.net" className="contacts">
              <img src={mail} alt={mail} />
              Shyroke_likar@ukr.net
            </a>
          </div>
          <div className="row__item social_item">
            <h6 className="row__title socials__title">Соціальні мережі</h6>
            <nav>
              <ul className="socials">
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiInstagramFill size={22} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsTelegram size={21} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/simeynyy_likar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsInstagram size={22} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/shyroke.likar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFacebook size={21} />
                  </a>
                </li>
              </ul>
              <div className="public">
                <h6 className="row__title public__title">
                  Доступ до публічної <br />
                  інформації
                </h6>
                <div>
                  <Button text="Читати" color="read" to="/public-info" />
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="footer-logo">
          <div className="line line-left"></div>
          <img src={footerLogo} alt={footerLogo} />
          <div className="line line-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
