import "./Form.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <section className="form">
        <h1>{t("Запис на прийом")}</h1>
        <div className="form__banner">
          <div className="container">
            <form
              action="/send"
              className="form__inner"
              onSubmit={handleFormSubmit}
            >
              <div className="form__info">
                <h2>Бланк броні</h2>
                <p>
                  Нам потрібно буде отримати вашу основну інформацію та
                  контактні дані для запису на прийом до лікаря. <br /> Як
                  тільки ми отримаємо ваші дані, звяжемося з вами надалі.
                </p>
              </div>
              <div className="form__field">
                <label htmlFor="name">{t("Ім'я")}</label>
                <input type="text" id="name" />
              </div>
              <div className="form__field">
                <label htmlFor="surname">{t("Прізвище")}</label>
                <input type="text" id="surname" />
              </div>
              <div className="form__field">
                <label htmlFor="phone">{t("Номер телефону")}</label>
                <input type="tel" id="phone" />
              </div>
              <div className="form__field">
                <label htmlFor="email">{t("Електронна пошта")}</label>
                <input type="email" id="email" />
              </div>

              <div className="form__field">
                <label htmlFor="date">{t("Переважний термін")}</label>
                <input type="date" id="date" />
              </div>
              <span type="submit" className="form__btn">
                {t("Відправити")}
              </span>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Form;
