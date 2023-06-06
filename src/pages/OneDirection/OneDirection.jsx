import "./OneDirection.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useTranslation } from "react-i18next";
import single from "../../assets/icons/single-spec-image.png";
import icon from "../../assets/icons/single-list-icon.svg";
import doctor from "../../assets/icons/single-spec-direc.png";
import { useLayoutEffect } from "react";
const OneDirection = () => {
  const { t } = useTranslation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <section className="oneDirection">
        <div className="container">
          <h1 className="oneDirection__title">{t("Стоматологія")}</h1>
          <div className="oneDirection__inner">
            <div className="oneDirection__item">
              <div className="oneDirection__item_desc">
                <h3>Види послуг , що надаються</h3>
                <div className="oneDirection__list">
                  <div className="oneDirection__list_item">
                    <img src={icon} alt="icon" />
                    <span>Лікування карієсу</span>
                  </div>
                  <div className="oneDirection__list_item">
                    <img src={icon} alt="icon" />
                    <span>Лікування ясен</span>
                  </div>
                  <div className="oneDirection__list_item">
                    <img src={icon} alt="icon" />
                    <span>Лікування зубних каналів</span>
                  </div>
                  <div className="oneDirection__list_item">
                    <img src={icon} alt="icon" />
                    <span>Лікування зубів під мікроскопом</span>
                  </div>
                  <div className="oneDirection__list_item">
                    <img src={icon} alt="icon" />
                    <span>Рентген зубів</span>
                  </div>
                  <div className="oneDirection__list_item">
                    <img src={icon} alt="icon" />
                    <span>Видаленнч зубів</span>
                  </div>
                  <div className="oneDirection__list_item">
                    <img src={icon} alt="icon" />
                    <span>Лікавання пульпіту</span>
                  </div>
                </div>
              </div>
              <img src={single} alt="about spec" />
            </div>
          </div>
          <div className="oneDirection__item  oneDirection__item--swapped">
            <div className="oneDirection__item_desc">
              <h3>Види послуг , що надаються</h3>
              <div className="oneDirection__list">
                <div className="oneDirection__list_item">
                  <img src={icon} alt="icon" />
                  <span>Лікування карієсу</span>
                </div>
                <div className="oneDirection__list_item">
                  <img src={icon} alt="icon" />
                  <span>Лікування ясен</span>
                </div>
                <div className="oneDirection__list_item">
                  <img src={icon} alt="icon" />
                  <span>Лікування зубних каналів</span>
                </div>
                <div className="oneDirection__list_item">
                  <img src={icon} alt="icon" />
                  <span>Лікування зубів під мікроскопом</span>
                </div>
                <div className="oneDirection__list_item">
                  <img src={icon} alt="icon" />
                  <span>Рентген зубів</span>
                </div>
                <div className="oneDirection__list_item">
                  <img src={icon} alt="icon" />
                  <span>Видаленнч зубів</span>
                </div>
                <div className="oneDirection__list_item">
                  <img src={icon} alt="icon" />
                  <span>Лікавання пульпіту</span>
                </div>
              </div>
            </div>
            <img src={single} alt="about spec" />
          </div>
          <div className="oneDirection__item">
            <div className="oneDirection__item_desc">
              <h3>Види послуг , що надаються</h3>
              <div className="oneDirection__list">
                <div className="oneDirection__list_item">
                  <img src={icon} alt="icon" />
                  <span>Лікування карієсу</span>
                </div>
                <div className="oneDirection__list_item">
                  <img src={icon} alt="icon" />
                  <span>Лікування ясен</span>
                </div>
                <div className="oneDirection__list_item">
                  <img src={icon} alt="icon" />
                  <span>Лікування зубних каналів</span>
                </div>
                <div className="oneDirection__list_item">
                  <img src={icon} alt="icon" />
                  <span>Лікування зубів під мікроскопом</span>
                </div>
                <div className="oneDirection__list_item">
                  <img src={icon} alt="icon" />
                  <span>Рентген зубів</span>
                </div>
                <div className="oneDirection__list_item">
                  <img src={icon} alt="icon" />
                  <span>Видаленнч зубів</span>
                </div>
                <div className="oneDirection__list_item">
                  <img src={icon} alt="icon" />
                  <span>Лікавання пульпіту</span>
                </div>
              </div>
            </div>

            <img src={single} alt="about spec" />
          </div>
        </div>
        <div className="ourDirections">
          <div className="container">
            <h3>Наші спеціалісти</h3>
            <div className="ourDirections__list">
              <div className="ourDirections__item">
                <img
                  className="ourDirections__item_image"
                  src={doctor}
                  alt="icon"
                />
                <div className="ourDirections__item_info">
                  <h4 className="ourDirections__item_title">
                    Іващенко Владислав Валерійович
                  </h4>
                  <p className="personourDirections__item_text">
                    головний лікар напрямку Стоматологія
                  </p>
                </div>
              </div>
              <div className="ourDirections__item">
                <img
                  className="ourDirections__item_image"
                  src={doctor}
                  alt="icon"
                />
                <div className="ourDirections__item_info">
                  <h4 className="ourDirections__item_title">
                    Іващенко Владислав Валерійович
                  </h4>
                  <p className="personourDirections__item_text">
                    головний лікар напрямку Стоматологія
                  </p>
                </div>
              </div>
              <div className="ourDirections__item">
                <img
                  className="ourDirections__item_image"
                  src={doctor}
                  alt="icon"
                />
                <div className="ourDirections__item_info">
                  <h4 className="ourDirections__item_title">
                    Іващенко Владислав Валерійович
                  </h4>
                  <p className="personourDirections__item_text">
                    головний лікар напрямку Стоматологія
                  </p>
                </div>
              </div>
              <div className="ourDirections__item">
                <img
                  className="ourDirections__item_image"
                  src={doctor}
                  alt="icon"
                />
                <div className="ourDirections__item_info">
                  <h4 className="ourDirections__item_title">
                    Іващенко Владислав Валерійович
                  </h4>
                  <p className="personourDirections__item_text">
                    головний лікар напрямку Стоматологія
                  </p>
                </div>
              </div>
              <div className="ourDirections__item">
                <img
                  className="ourDirections__item_image"
                  src={doctor}
                  alt="icon"
                />
                <div className="ourDirections__item_info">
                  <h4 className="ourDirections__item_title">
                    Іващенко Владислав Валерійович
                  </h4>
                  <p className="personourDirections__item_text">
                    головний лікар напрямку Стоматологія
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OneDirection;
