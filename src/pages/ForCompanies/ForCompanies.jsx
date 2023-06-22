import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./ForCompanies.scss";
import itemIcon from "../../assets/icons/forCompaniesIcon.svg";
import itemIcon1 from "../../assets/icons/forCompaniesIcon1.svg";
import itemIcon2 from "../../assets/icons/forCompaniesIcon2.svg";
import itemIcon3 from "../../assets/icons/forCompaniesIcon3.svg";
import itemIcon4 from "../../assets/icons/forCompaniesIcon4.svg";
import itemIcon5 from "../../assets/icons/forCompaniesIcon5.svg";
import itemIcon6 from "../../assets/icons/forCompaniesIcon6.svg";
import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
const ForCompanies = () => {
  const { t } = useTranslation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <section className="forCompanies">
        <div className="container">
          <h2>{t("Для компаній")}</h2>
          <div className="forCompanies__list">
            <div className="forCompanies__list_item">
              <img src={itemIcon} alt="icon" />
              <p>
                {t(
                  "Профілактичні огляди робітників згідно наказів МОЗ №246 та №280"
                )}
              </p>
            </div>
            <div className="forCompanies__list_item">
              <img src={itemIcon1} alt="icon1" />
              <p>
                {t(
                  "Профілактичні огляди При зарахуванні на навчання , при прийомі на роботу"
                )}
              </p>
            </div>
            <div className="forCompanies__list_item">
              <img src={itemIcon2} alt="icon2" />
              <p>
                {t(
                  "Довідка про прохождення психіатричного огляду з обстеженням на вживання наркотичних речовин"
                )}
              </p>
            </div>
            <div className="forCompanies__list_item">
              <img src={itemIcon3} alt="icon3" />
              <p>
                {t(
                  "Медична довідка для отримання дозволу на керування автотранспортом"
                )}
              </p>
            </div>
            <div className="forCompanies__list_item">
              <img src={itemIcon4} alt="icon4" />
              <p>
                {t(
                  "Медична довідка для отримання дозволу на об’єкт дозвільної системи(зброя)"
                )}
              </p>
            </div>
            <div className="forCompanies__list_item">
              <img src={itemIcon5} alt="icon5" />
              <p>
                {t(
                  "Транспортування пацієнта в будь-яке месце під медичним наглядом"
                )}
              </p>
            </div>
            <div className="forCompanies__list_item">
              <img src={itemIcon6} alt="icon6" />
              <p>{t("Медичний супровід подій (збори, тренінги, поховання)")}</p>
            </div>
          </div>
        </div>
        <div className="forCompanies__feedback">
          <div className="container">
            <div className="block">
              <h3>
                {" "}
                {t("У вас є питання щодо медичної пропозиції для компаній?")}
              </h3>
              <div>
                <p>{t("Напишіть нам")}</p>
                <a href="mailto:Shyroke_likar@ukr.net">Shyroke_likar@ukr.net</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ForCompanies;
