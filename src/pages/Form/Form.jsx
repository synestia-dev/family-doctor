/* eslint-disable react/prop-types */
import { useState, useEffect, useLayoutEffect } from "react";
import "./Form.scss";
import emailjs from "@emailjs/browser";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
// import FormBanner from "./FormBanner/FormBanner.jsx";
import form1 from "../../assets/form1.jpg";
import form2 from "../../assets/form2.jpg";
import {
  validateEmail,
  validateName,
  validatePhone,
  validateMessage,
} from "../../helpers/validate";

const Modal = ({ children, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckErr, setIsCheckErr] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const {
    name: name,
    surname: surname,
    phone: phone,
    email: email,
    message: message,
  } = formData;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsFormFilled(
        validateName(name) &&
          validateName(surname) &&
          validateEmail(email) &&
          validatePhone(phone) &&
          validateMessage(message)
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [validateName, validateEmail, validatePhone, validateMessage]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !validateName(formData.name) ||
      !validateName(formData.surname) ||
      !validateEmail(formData.email) ||
      !validatePhone(formData.phone) ||
      !validateMessage(formData.message)
    ) {
      setIsFormFilled(true);
      return;
    }
    if (!isChecked) {
      setIsCheckErr(true);
      return;
    }
    emailjs
      .sendForm(
        "service_h54rlqs",
        "template_jtpi4vy",
        e.currentTarget,
        "b3g5Tk4p--UIVDoEL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormData({
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsFormFilled(false);
    setIsModalOpen(true);
    setIsChecked(false);

    e.currentTarget.reset();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            <form className="form__block" onSubmit={handleFormSubmit}>
              <div className="form__block_field">
                <label htmlFor="name">{t("Ім'я")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("Ім'я")}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={
                    !validateName(formData.name) && isFormFilled
                      ? "invalid-input"
                      : ""
                  }
                />
              </div>
              <div className="form__block_field">
                <label htmlFor="surname">{t("Прізвище")}</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder={t("Прізвище")}
                  value={formData.surname}
                  onChange={(e) =>
                    setFormData({ ...formData, surname: e.target.value })
                  }
                  className={
                    !validateName(formData.surname) && isFormFilled
                      ? "invalid-input"
                      : ""
                  }
                />
              </div>
              <div className="form__block_field">
                <label htmlFor="phone">{t("Номер телефону")}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="0123456789"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={
                    !validatePhone(formData.phone) && isFormFilled
                      ? "invalid-input"
                      : ""
                  }
                />
              </div>
              <div className="form__block_field">
                <label htmlFor="email">{t("Електронна пошта")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("Електронна пошта")}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={
                    !validateEmail(formData.email) && isFormFilled
                      ? "invalid-input"
                      : ""
                  }
                />
              </div>

              <div className="form__block_field">
                <label htmlFor="message">{t("Ваше повідомлення")}</label>
                <textarea
                  type="date"
                  id="message"
                  name="message"
                  placeholder={t("Ваше повідомлення")}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={
                    !validateMessage(formData.message) && isFormFilled
                      ? "invalid-input"
                      : ""
                  }
                />
              </div>

              <div className="form__block_check">
                <input
                  type="checkbox"
                  name="privacy"
                  id="privacy"
                  value={isChecked}
                  onChange={() => {
                    setIsCheckErr(false);
                    setIsChecked((prev) => !prev);
                  }}
                  className={isCheckErr ? "checkbox invalid-input" : "checkbox"}
                />
                <label htmlFor="privacy">
                  Я згоден на відправку комерційного повідомлення Сімейному
                  Лікарю, <br /> електронною поштою / смс. Детальні умови
                  обробки персональних даних доступні здесь
                </label>
              </div>
              <input
                type="submit"
                className="form__sumbit"
                value={t("Відправити")}
              />
            </form>
          </div>
          <div className="form__details">
            <div>
              <img src={form1} alt="details" />
              <div className="desciption">
                <div className="description__title">
                  <h2>Як записатись на прийом?</h2>
                  <p>Приймаємо за попереднім записом</p>
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
                      <span> Зателефонуйте</span> <br />
                      <a href="tel:+380991888003">+38 099 18 88 003</a> <br />
                      <a href="tel:+380961888003">+38 096 18 88 003</a> <br />
                      <a href="tel:+380731888003">+38 073 18 88 003</a> <br />і
                      запишіться на прийом за телефоном
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

            {/*second*/}
            <div>
              <img src={form2} alt="details" />
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

        {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h3>{t("Дякуємо за ваше повідомлення!")}</h3>
          <p>{t("Ми скоро з вами зв'яжемося")}</p>
        </Modal>
      )}
      </section>

      <Footer />
    </>
  );
};

export default Form;
