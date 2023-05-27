import "./About.scss";
import { useState, useEffect } from "react";
import { getRequest } from "../../../../api";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { shuffle } from "../../../../helpers";
const About = () => {
  const { t } = useTranslation();
  const [directionsData, setDirectionsData] = useState([]);
  const [popularDirections, setPopularDirections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest("directions?populate=icon&sort=id");
        if (response && response.data) {
          console.log(response.data);
          setDirectionsData(response.data);
          setPopularDirections(shuffle(response.data.slice()).slice(0, 5));
        }
      } catch (error) {
        console.log("Error fetching directions data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="about">
      <div className="container">
        <div className="about__title">
          <h2 className="title">{t('Які медичні послуги ми пропонуємо?')}</h2>
          <p className="text">{t('Найбільш відвідувані послуги:')}</p>
        </div>
        <div className="services">
          <nav className="services__popular">
            {popularDirections.map(({ attributes, id }) => (
              <li key={id} className="services__item">
                <img
                  src={`${import.meta.env.VITE_API_URL}${
                    attributes.icon.data?.attributes.url
                  }`}
                  alt="icon"
                />
                <span>{t(attributes.title)}</span>
              </li>
            ))}
          </nav>
          <div className="services__catalogue">
            <ul className="catalogue__items">
              {directionsData.slice(0, 5).map(({ attributes, id }) => (
                <li key={id}>
                  <Link to="/">
                    <img
                      src={`${import.meta.env.VITE_API_URL}${
                        attributes.icon.data?.attributes.url
                      }`}
                      alt="icon"
                    />
                    <span>{t(attributes.title)}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <hr className="vertical-line" />

            <ul className="catalogue__items">
              {directionsData.slice(5, 10).map(({ attributes, id }) => (
                <li key={id}>
                  <Link to="/">
                    <img
                      src={`${import.meta.env.VITE_API_URL}${
                        attributes.icon.data?.attributes.url
                      }`}
                      alt="icon"
                    />
                    <span>{t(attributes.title)}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <hr className="vertical-line" />
            <ul className="catalogue__items">
              {directionsData.slice(10, 15).map(({ attributes, id }) => (
                <li key={id}>
                  <Link to="/">
                    <img
                      src={`${import.meta.env.VITE_API_URL}${
                        attributes.icon.data?.attributes.url
                      }`}
                      alt="icon"
                    />
                    <span>{t(attributes.title)}</span>
                  </Link>
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
