import "./About.scss";
import dentist from "../../assets/icons/about-icons/dentist.png";
import gynecologist from "../../assets/icons/about-icons/gynecologist.png";
import cardiologist from "../../assets/icons/about-icons/cardiologist.png";
import health_treatment from "../../assets/icons/about-icons/health_treatment.png";
import psychologist from "../../assets/icons/about-icons/psychologist.png";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__title">
          <h2 className="title">Які медичні послуги ми пропонуємо?</h2>
          <p className="text">Найбільш відвідувані послуги:</p>
        </div>
        <div className="services">
          <nav className="services__popular">
            <li className="services__item">
              <img src={dentist} alt="dentist" />
              <span>Стоматологія</span>
            </li>
            <li className="services__item">
              <img src={gynecologist} alt="gynecologist" />
              <span>Гінеколог</span>
            </li>
            <li className="services__item">
              <img src={psychologist} alt="psychologist" />
              <span>Психолог</span>
            </li>
            <li className="services__item">
              <img src={health_treatment} alt="health_treatment" />
              <span>Реабилитолог</span>
            </li>
            <li className="services__item">
              <img src={cardiologist} alt="cardiologist" />
              <span>Кардиолог</span>
            </li>
          </nav>
          <div className="services__catalogue">
            <div className="catalogue__items">
              <ul>
                <li>
                  <img src={dentist} alt="dentist" />
                  <span>Стоматология</span>
                </li>
                <li>
                  <img src={dentist} alt="dentist" />
                  <span>Фізіотерапевтичні процедури</span>
                </li>
                <li>
                  <img src={dentist} alt="dentist" />
                  <span>Діагностичні послуги</span>
                </li>
                <li>
                  <img src={dentist} alt="dentist" />
                  <span>Отоларингологія</span>
                </li>
                <li>
                  <img src={dentist} alt="dentist" />
                  <span>Офтальмологія</span>
                </li>
              </ul>
            </div>
            <hr className="vertical-line" />
            <div className="catalogue__items">
              <ul>
                <li>
                  <img src={dentist} alt="dentist" />
                  <span>Стоматология</span>
                </li>
                <li>
                  <img src={dentist} alt="dentist" />
                  <span>Фізіотерапевтичні процедури</span>
                </li>
                <li>
                  <img src={dentist} alt="dentist" />
                  <span>Діагностичні послуги</span>
                </li>
                <li>
                  <img src={dentist} alt="dentist" />
                  <span>Отоларингологія</span>
                </li>
                <li>
                  <img src={dentist} alt="dentist" />
                  <span>Офтальмологія</span>
                </li>
              </ul>
            </div>
            <hr className="vertical-line" />
            <div className="catalogue__items">
              <ul>
                <li>
                  <img src={dentist} alt="dentist" />
                  <span>Стоматология</span>
                </li>
                <li>
                  <img src={dentist} alt="dentist" />
                  <span>Фізіотерапевтичні процедури</span>
                </li>
                <li>
                  <img src={dentist} alt="dentist" />
                  <span>Діагностичні послуги</span>
                </li>
                <li>
                  <img src={dentist} alt="dentist" />
                  <span>Отоларингологія</span>
                </li>
                <li>
                  <img src={dentist} alt="dentist" />
                  <span>Офтальмологія</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
