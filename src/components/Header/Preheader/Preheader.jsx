import "./Preheader.scss";
import geo from "../../../assets/icons/geo.svg";
import phone from "../../../assets/icons/phone.svg";
import mail from "../../../assets/icons/mail.svg";
const Preheader = () => {
  return (
    <div className="preheader">
      <div className="container">
        <div className="preheader__inner">
          <div className="preheader__left">
            <img src={geo} alt="geo" />
            <p>м. Запоріжжя, вул. Лікарняна, 18.</p>
          </div>
          <div className="preheader__right">
            <div>
              <img src={phone} alt="phone" />
              <p>+38 (068) 188-81-03</p>
            </div>
            <div>
              <img src={mail} alt="mail" />
              <p>Shyroke_likar@ukr.net</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preheader;
