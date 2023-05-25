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
            <div className="">
              <div className="">Пн-Пт:</div>
              <div className="">8:00-20:00</div>
              <div className="">Сб-Вс:</div>
              <div className="">9:00-15:00</div>
            </div>
            <h6 className="">Адрес</h6>
            <p className="">
              <img src={geo} alt="geo" />
              м. Запоріжжя, вул. Лікарняна, 18.
            </p>
          </div>
          <div className="row__item">
            <h6 className="row__title">О нас</h6>
            <nav>
              <ul className="about__list">
                <li className="list__item">
                  <a href="" className="">
                    Клиника
                  </a>
                </li>
                <li className="">
                  <a href="" className="">
                    Фотогалерея
                  </a>
                </li>
                <li className="">
                  <a href="" className="">
                    Блог
                  </a>
                </li>
                <li className="">
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
                <li className="list__item">
                  <a href="" className="">
                    Клиника
                  </a>
                </li>
                <li className="">
                  <a href="" className="">
                    Фотогалерея
                  </a>
                </li>
                <li className="">
                  <a href="" className="">
                    Блог
                  </a>
                </li>
                <li className="">
                  <a href="" className="">
                    Наша команда
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="row__item">
            <h6 className="row__title">Контакты</h6>
            <a href="" className="">
              <img src={phone} alt={phone} />
              <span className="">
                +38 (061) 764-87-03 приймальня ген директора
              </span>
            </a>
            <br />
            <a href="tel:+" className="">
              <img src={phone} alt={phone} />
              <span className="">+38 (061) 764-87-08 відділ кадрів</span>
            </a>
            <br />
            <a href="" className="">
              <img src={mail} alt={mail} />
              <span className="">пааааа</span>
            </a>
          </div>
        </div>

        <img src={footerLogo} alt={footerLogo} className="horizontal-logo" />
      </div>
    </div>
  );
};

export default Footer;
