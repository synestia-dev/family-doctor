import "./About.scss";
import {
  POPULAR_SERVICES,
  ALL_SERVICES,
} from "../../../../assets/dummy/dummy-data.jsx";

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
            {POPULAR_SERVICES.map((service, index) => (
              <li key={index} className="services__item">
                {service.icon}
                <span>{service.title}</span>
              </li>
            ))}
          </nav>
          <div className="services__catalogue">
            <ul className="catalogue__items">
              {ALL_SERVICES.slice(0, 5).map((service, index) => (
                <li key={index}>
                  {service.icon}
                  <span>{service.title}</span>
                </li>
              ))}
            </ul>

            <hr className="vertical-line" />

            <ul className="catalogue__items">
              {ALL_SERVICES.slice(5, 10).map((service, index) => (
                <li key={index}>
                  {service.icon}
                  <span>{service.title}</span>
                </li>
              ))}
            </ul>
            <hr className="vertical-line" />
            <ul className="catalogue__items">
              {ALL_SERVICES.slice(10, 15).map((service, index) => (
                <li key={index}>
                  {service.icon}
                  <span>{service.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
