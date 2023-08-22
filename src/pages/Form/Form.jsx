import "./Form.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
// import FormBanner from "./FormBanner/FormBanner.jsx";
import formDetails from "../../assets/icons/formDetails.png";
import { useLayoutEffect } from "react";
const Form = () => {
  const { t } = useTranslation();
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div></div>
      <section className="form">
        <div className="container">
          <h1 className="form__title">{t("Запис на прийом")}</h1>
          <div className="form__inner">
            <div className="form__info">
              <h2>Бланк броні</h2>
              <p>
                {t(`Нам потрібно буде отримати вашу основну інформацію та контактні
                    дані для запису на прийом до лікаря.
                    Як тільки ми отримаємо ваші дані, зв'яжемося з вами надалі.`)}
              </p>
            </div>
            <div className="form__block">
              <div className="form__block_field">
                <label htmlFor="name">{t("Ім'я")}</label>
                <input type="text" id="name" />
              </div>
              <div className="form__block_field">
                <label htmlFor="surname">{t("Прізвище")}</label>
                <input type="text" id="surname" />
              </div>
              <div className="form__block_field">
                <label htmlFor="phone">{t("Номер телефону")}</label>
                <input type="tel" id="phone" />
              </div>
              <div className="form__block_field">
                <label htmlFor="email">{t("Електронна пошта")}</label>
                <input type="email" id="email" />
              </div>

              <div className="form__block_field">
                <label htmlFor="date">{t("Переважний термін")}</label>
                <input type="date" id="date" />
              </div>

              <div className="form__block_check">
                <input type="checkbox" name="privacy" className="checkbox" />
                <label htmlFor="">
                  Я згоден на відправку комерційного повідомлення Сімейному
                  Лікарю, sro <br /> електронною поштою / смс. Детальні умови
                  обробки персональних даних доступні{" "}
                  <a href="" target="_blank" className="">
                    здесь
                  </a>
                  .
                </label>{" "}
              </div>
            </div>
            <input
              type="submit"
              className="form__sumbit"
              value={t("Відправити")}
            />
          </div>
          <div className="form__details">
            <div>
              <img src={formDetails} alt="details" />
              <div className="desciption">
                <div className="description__title">
                  <h2>Як записатись на прийом?</h2>
                  <p>
                  Приймаємо за попереднім записом
                  </p>
                </div>
                <div className="description__steps">
                  <div>
                    <div>1</div>
                    <p>
                      <span>Заповніть форму бронювання вище</span> і наша
                      команда звяжеться з вами якнайшвидше.
                    </p>
                  </div>
                  <div>
                    <div>2</div>
                    <p>
                      <span> Зателефонуйте</span>{" "}
                      <a href="">+38 099 18 88 003
                                +38 096 18 88 003
                                +38 073 18 88 003
                      </a> і запишіться на прийом за
                      телефоном
                    </p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>

            {/*second*/}
            <div>
              <img src={formDetails} alt="details" />
              <div className="desciption">
                <div className="description__title2">
                  <h2>На реєстратурі Клініки вам допоможуть:</h2>
                </div>
                <div className="description__steps2">
                  <div>
                    <div>1</div>
                    <p>Бронювання / Зміни / Скасування записів</p>
                  </div>
                  <div>
                    <div>2</div>
                    <p>Платежі медичних послуг</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form__banner" />
      </section>

      <Footer />
    </>
  );
};

export default Form;
