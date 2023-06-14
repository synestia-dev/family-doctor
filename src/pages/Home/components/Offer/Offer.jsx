import "./Offer.scss";
import { useState, useEffect } from "react";
import { getRequest } from "../../../../api";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { shuffle } from "../../../../helpers";
import Button from "../../../../components/Button/Button";
const Offer = () => {
  const { t } = useTranslation();
  const [directionsData, setDirectionsData] = useState([]);
  const [popularDirections, setPopularDirections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest("directions?populate=icon&sort=id");
        if (response?.data) {
          const sortedData = [...response.data].sort(
            (a, b) => a.attributes.title?.localeCompare(b.attributes.title) || 0
          );
          setDirectionsData(sortedData);
          setPopularDirections(shuffle(sortedData.slice()).slice(0, 4));
        }
      } catch (error) {
        console.log("Error fetching directions data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="offer">
      <div className="container">
        <div className="offer__title">
          <h2 className="title">{t("Які медичні послуги ми пропонуємо?")}</h2>
          <p className="text">{t("Найбільш відвідувані послуги:")}</p>
          <p className="text-mob">{t("Усі послуги:")}</p>
        </div>
        <div className="services">
          <div className="services__popular">
            {popularDirections.map(({ attributes, id }) => (
              <Link to={`/direction/${id}`} key={id} className="services__item">
                <img src={attributes.icon.data?.attributes.url} alt="icon" />
                <span>{t(attributes.title)}</span>
              </Link>
            ))}
          </div>
          <div className="services__catalogue">
            {directionsData.map(({ attributes, id }) => (
              <div className="services__catalogue_item" key={id}>
                <Link to={`/direction/${id}`}>
                  <img src={attributes.icon.data.attributes.url} alt="icon" />
                  <span>{t(attributes.title)}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Button
          to="/form"
          text="Записатись на прийом"
          color="sign-up default"
        />
      </div>
    </div>
  );
};

export default Offer;
