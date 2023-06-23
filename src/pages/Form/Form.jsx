import "./Form.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
// import FormBanner from "./FormBanner/FormBanner.jsx";
import formDetails from "../../assets/icons/formDetails.png";
import { useLayoutEffect } from "react";
import Button from "../../components/Button/Button.jsx";
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
              <h2>{t("Бланк броні")}</h2>
              <p>
                {t(
                  "Нам потрібно буде отримати вашу основну інформацію та контактні дані для запису на прийом до лікаря."
                )}{" "}
                <br />
                {t(
                  "Як тільки ми отримаємо ваші дані, зв'яжемося з вами надалі."
                )}
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
                  {t(
                    "Я згоден на відправку комерційного повідомлення Сімейному Лікарю, sro електронною поштою / смс."
                  )}
                  {t("Детальні умови обробки персональних даних доступні")}
                  <a href="" target="_blank" className="">
                    {t(" здесь")}
                  </a>
                  .
                </label>{" "}
              </div>
            </div>
            <Button text={t("Відправити")} color="submit" />
          </div>
          <div className="form__details">
            <div className="form__details_item">
              <img src={formDetails} alt="details" />
              <div className="description">
                <div className="description__title">
                  <h2>{t("Як записатись на прийом?")}</h2>
                  <p>
                    {t(
                      "Якщо ви хочете записатися на прийом, у вас є кілька варіантів:"
                    )}
                  </p>
                </div>
                <div className="description__steps">
                  <div>
                    <div>1</div>
                    <p>
                      <span>{t("Заповніть форму бронювання вище")}</span>{" "}
                      {t("і наша команда звяжеться з вами якнайшвидше.")}
                    </p>
                  </div>
                  <div>
                    <div>2</div>
                    <p>
                      <span> {t("Зателефонуйте ")}</span>
                      <a href="">+420 235 356 553</a>{" "}
                      {t("і запишіться на прийом за телефоном")}
                    </p>
                  </div>
                  <div>
                    <div>3</div>
                    <p>
                      <span>{t("Надішліть нам електронний лист")}</span>
                      {t(" за адресою ")}
                      <a>reception@unicare.cz</a>{" "}
                      {t(
                        "і ми звяжемося з вами, щоб повідомити найближчі вільні дати."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*second*/}
            <div className="form__details_item">
              <img src={formDetails} alt="details" />
              <div className="description">
                <div className="description__title2">
                  <h2>
                    {" "}
                    {t("Зробіть замовлення через нашу стійку реєстрації")}
                  </h2>
                  <p>
                    {t(
                      "Всі прийоми здійснюються централізовано через нашу приймальню, яка порекомендує лікаря, що найбільше підходить для вирішення вашої поточної проблеми, і запишеться на прийом до лікаря. На рецепції вам допоможуть:"
                    )}
                  </p>
                </div>
                <div className="description__steps2">
                  <div>
                    <div>1</div>
                    <p>{t("Бронювання / Зміни / Скасування зустрічей")}</p>
                  </div>
                  <div>
                    <div>2</div>
                    <p>{t("Усі супутні медичні адміністративні")}</p>
                  </div>
                  <div>
                    <div>3</div>
                    <p>{t("Платежі за медичні послуги")}</p>
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
