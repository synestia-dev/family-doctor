import "./Footer.scss";
import footerLogo from "../../assets/icons/footer-logo.svg";
import geo from "../../assets/icons/geo.svg";
import phone from "../../assets/icons/phone.svg";
import mail from "../../assets/icons/mail.svg";
import { BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

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
            <h6 className="address">Адрес</h6>
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
          </div>
          <div className="row__item">
            <h6 className="row__title">Про нас</h6>
            <nav>
              <ul className="about__list">
                <li>
                  <Link to="/about">Клініка</Link>
                </li>
                <li>
                  <Link to="/gallery">Фотогалерея</Link>
                </li>
                <li>
                  <Link to="/news">Блог</Link>
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
            <a href="tel:+380617648703" className="contacts">
              <img src={phone} alt={phone} />
              <span className="contacts__item">
                +38 (061) 764-87-03 <br /> приймальня ген директора
              </span>
            </a>
            <br />
            <a href="tel:+380617648708" className="contacts">
              <img src={phone} alt={phone} />
              <p className="contacts__item">
                +38 (061) 764-87-08 <br /> відділ кадрів
              </p>
            </a>
            <br />
            <a href="mailto:Shyroke_likar@ukr.net" className="contacts">
              <img src={mail} alt={mail} />
              <a className="contacts__item" href="mailto:Shyroke_likar@ukr.net">
                Shyroke_likar@ukr.net
              </a>
            </a>
          </div>
          <div className="row__item">
            <h6 className="row__title">Соціальні мережі</h6>
            <nav>
              <ul className="socials">
                <li>
                  <a href="https://www.instagram.com">
                    <RiInstagramFill size={22} />
                  </a>
                </li>
                <li>
                  <a href="https://t.me">
                    <BsTelegram size={21} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <BsInstagram size={22} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com">
                    <BsFacebook size={21} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <img src={footerLogo} alt={footerLogo} className="horizontal-logo" />
      </div>
    </div>
  );
};

export default Footer;
