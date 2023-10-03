import "./Preheader.scss";

import phone from "../../../assets/icons/phone.svg";
import mail from "../../../assets/icons/mail.svg";
import { useTranslation } from "react-i18next";
import Geo from "../../../assets/iconComponents/Geo.jsx";
const Preheader = () => {
  const { t } = useTranslation();
  return (
    <div className="preheader">
      <div className="container">
        <div className="preheader__inner">
          <div className="preheader__left">
            <Geo />
            <p>{t("м. Запоріжжя, вул. Лікарняна, 18")}</p>
          </div>
          <div className="preheader__right">
            <div>
              <img src={phone} alt="phone" />
              <a href="tel:+380991888003">+38 (099) 18 88 003</a>
              <img src={phone} alt="phone" />
              <a href="tel:+380961888003">+38 (096) 18 88 003</a>
              <img src={phone} alt="phone" />
              <a href="tel:+38073188800">+38 (073) 18 88 003</a>
            </div>
            <div>
              <img src={mail} alt="mail" />
              <a href="mailto:Shyroke_likar@ukr.net">Shyroke_likar@ukr.net</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preheader;
