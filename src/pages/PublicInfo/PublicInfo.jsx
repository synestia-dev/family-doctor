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
                  <a href="#" className="">
                    <img src={arrowRight} alt={arrowRight} />
                    <p className="">
                      {t(
                        "База даних «Законодавство України» на веб-сайті Верховної Ради України."
                      )}
                    </p>
                  </a>
                  <a href="#" className="">
                    <img src={arrowRight} alt={arrowRight} />
                    <p className="">
                      {t(
                        "Нормативно-правові акти з питань охорони здоров’я МОЗ України."
                      )}
                    </p>
                  </a>
                </div>
                <p className="info__text">
                  {t(
                    "Надання публічної інформації Запорізькою обласною клінічною лікарнею здійснюється у відповідь на"
                  )}
                  <span>&nbsp;{t("інформаційний")}&nbsp;</span>
                  {t("запит.")} {t("Електронна адреса:")}{" "}
                  <span>cancelariya.zokb@gmail.com.</span>
                </p>
                <p className="info__text">
                  {t(
                    "Згідно з законом, публічною є відображена та задокументована будь-якими засобами та на будь-яких носіях інформація, що була отримана або створена в процесі виконання суб’єктами владних повноважень своїх обов’язків, передбачених чинним законодавством, або яка знаходиться у володінні суб’єктів владних повноважень."
                  )}
                </p>
                <p className="info__text bold">
                  {t(
                    "Запит від особи на отримання інформації складається у довільній формі."
                  )}
                  <br />
                  {t("При цьому необхідно вказати:")}
                </p>
                <p className="info__rules">
                  1){" "}
                  {t(
                    "ім’я та прізвище запитувача, поштову адресу або адресу електронної пошти, а також номер телефону;"
                  )}
                </p>
                <p className="info__rules">
                  2){" "}
                  {t(
                    "опис інформації, яку запитувач хотів би отримати. (Вид, назву, реквізити чи зміст документа, щодо якого зроблено запит)"
                  )}
                </p>
                <p className="info__rules">3) {t("підпис і дату.")}</p>
              </div>
              <div className="info__details">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PublicInfo;
