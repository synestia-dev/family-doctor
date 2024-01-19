import "./PublicInfo.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useLayoutEffect } from "react";
import arrowRight from "../../assets/icons/public-info-arrow.svg";
import { useTranslation } from "react-i18next";

const PublicInfo = () => {
  const { t } = useTranslation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="publicInfo">
        <div className="container">
          <div className="publicInfo__content">
            <h1 className="publicInfo__content_title">
              {t("Доступ до публічної")}
              <br />
              {t("інформації")}
            </h1>
            <div>
              <h3>{t("Законодавча база")}</h3>
              <hr />
              <div className="info">
                <div className="info__links">
                  <a
                    href="https://zakon.rada.gov.ua/laws/show/2801-12#Text"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={arrowRight} alt={arrowRight} />
                    <p className="">
                      {t(
                        'Закон України "Основи законодавства України про охорону здоров\'я" '
                      )}
                    </p>
                  </a>
                  <a
                    href="https://zakon.rada.gov.ua/laws/show/2939-17#Text"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={arrowRight} alt={arrowRight} />
                    <p className="">
                      {t('Закон України "Про доступ до публічної інформації"')}
                    </p>
                  </a>
                  <a
                    href="https://zakon.rada.gov.ua/laws/show/393/96-%D0%B2%D1%80#Text"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={arrowRight} alt={arrowRight} />
                    <p className="">
                      {t('Закон України "Про звернення громадян"')}
                    </p>
                  </a>
                  <a
                    href="https://moz.gov.ua/gromadjanam"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={arrowRight} alt={arrowRight} />
                    <p className="">
                      {t("Сайт Міністерства охорони здоров'я України")}
                    </p>
                  </a>
                  <a
                    href="https://service.e-health.gov.ua/gromadyanam"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={arrowRight} alt={arrowRight} />
                    <p className="">
                      {t("Сайт Національної служби здоров'я України")}
                    </p>
                  </a>
                  <a
                    href="https://ombudsman.gov.ua/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={arrowRight} alt={arrowRight} />
                    <p className="">
                      {t("Уповноважений Верховної Ради України з прав людини")}
                    </p>
                  </a>
                </div>
                <p className="info__text">
                  {t(
                    "Порядок складання та подання запиту на інформацію Відповідно до статті 19 Закону України «Про доступ до публічної інформації» запит на інформацію може подаватися усно, письмово або в іншому вигляді на вибір запитувача."
                  )}
                </p>
                <p className="info__text bold">
                  {t("Запит складається в довільній формі і має містити:")}
                </p>
                <p className="info__rules">
                  1){" "}
                  {t(
                    "ім'я (найменування) запитувача, поштову адресу або адресу електронної пошти, а також номер засобу зв'язку, якщо такий є;"
                  )}
                </p>
                <p className="info__rules">
                  2){" "}
                  {t(
                    "загальний опис інформації або вид, назву, реквізити чи зміст документа, щодо якого зроблено запит, якщо запитувачу це відомо;"
                  )}
                </p>
                <p className="info__rules">
                  3){" "}
                  {t(
                    "підпис і дату за умови подання запиту в письмовій формі."
                  )}
                </p>
                <p className="info__text bold" style={{ paddingTop: "20px" }}>
                  {t("До Клініки запит на інформацію може бути поданий:")}
                </p>
                <p className="info__rules">
                  -{" "}
                  {t(
                    "на поштову адресу: вул. Лікарняна 18, м. Запоріжжя, 69089;"
                  )}
                </p>
                <p className="info__rules">
                  - {t("на електронну адресу: ")}
                  <a
                    href="mailto:shyroke_likar@ukr.net"
                    style={{ display: "inline-flex" }}
                  >
                    shyroke_likar@ukr.net
                  </a>
                </p>
              </div>
              {/* <div className="info__details">
                <p className="info__text bold">
                  {t("Лікарські засоби та вироби")}
                </p>
                <hr />
                <ul className="info__list">
                  <li>
                    <a href="#">
                      {t(
                        "Актуальні залишки медикаментів та виробів медичного призначення."
                      )}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {t(
                        "Реєстр пацієнтів на імплантацію електрокардіостимуляторів на 14.09.2018 р."
                      )}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {t("Залишки лікарських засобів та виробів на 15.03.2021")}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="info__text bold">{t("Тендерні закупівлі")}</p>
                <hr />
                <ul className="info__list">
                  <li>
                    <a href="#">{t("Фірмове канцелярське приладдя")}</a>
                  </li>
                  <li>
                    <a href="#">{t("БФП (друк, сканування, копіювання)")}</a>
                  </li>
                  <li>
                    <a href="#">
                      {t(
                        "Апарат для моніторингу внутрішньочерепного тиску з набором датчиків"
                      )}
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PublicInfo;
