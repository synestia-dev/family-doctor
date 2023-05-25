import "./Footer.scss";
import footerLogo from "../../assets/icons/footer-logo.svg";
import geo from "../../assets/icons/geo.svg";
import phone from "../../assets/icons/phone.svg";
import mail from "../../assets/icons/mail.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="row__item">
            <h6 className="row__title">Время работы</h6>
            <div className="schedule">
              <div>Пн-Пт:</div>
              <div>8:00-20:00</div>
              <div>Сб-Вс:</div>
              <div>9:00-15:00</div>
            </div>
            <h6 className="address">Адрес</h6>
            <p className="address__info">
              <img src={geo} alt="geo" />
              м. Запоріжжя, вул. Лікарняна, 18.
            </p>
          </div>
          <div className="row__item">
            <h6 className="row__title">О нас</h6>
            <nav>
              <ul className="about__list">
                <li>
                  <a href="#">Клиника</a>
                </li>
                <li>
                  <a href="#">Фотогалерея</a>
                </li>
                <li>
                  <a href="#">Блог</a>
                </li>
                <li>
                  <a href="" className="">
                    Наша команда
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="row__item">
            <h6 className="row__title">Для клиентов</h6>
            <nav>
              <ul className="about__list">
                <li>
                  <a href="#">Клиника</a>
                </li>
                <li>
                  <a href="#">Фотогалерея</a>
                </li>
                <li>
                  <a href="#">Блог</a>
                </li>
                <li className="">
                  <a href="#">Наша команда</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="row__item">
            <h6 className="row__title">Контакты</h6>
            <a href="" className="contact">
              <img src={phone} alt={phone} />
              <span className="contact__item">
                +38 (061) 764-87-03 <br /> приймальня ген директора
              </span>
            </a>
            <br />
            <a href="" className="contact">
              <img src={phone} alt={phone} />
              <p className="contact__item">
                +38 (061) 764-87-08 <br /> відділ кадрів
              </p>
            </a>
            <br />
            <a href="" className="contact">
              <img src={mail} alt={mail} />
              <span className="contact__item">Shyroke_likar@ukr.net</span>
            </a>
          </div>
        </div>

        <img src={footerLogo} alt={footerLogo} className="horizontal-logo" />
      </div>
    </div>
  );
};

export default Footer;
