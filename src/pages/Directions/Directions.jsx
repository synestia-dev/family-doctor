import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Directions.scss";
import { getRequest } from "../../api";
import DirectionItem from "./components/DirectionItem/DirectionItem.jsx";
import { useTranslation } from "react-i18next";
const Directions = () => {
  const { t } = useTranslation();
  const [directionsData, setDirectionsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest("directions?populate=icon&sort=id");
        if (response && response.data) {
          console.log(response.data);
          return setDirectionsData(response.data);
        }
      } catch (error) {
        console.log("Error fetching directions data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <section className="directions">
        <div className="container">
          <h2 className="directions__title">{t("Наші напрямки")}</h2>
          <div className="directions__list">
            {directionsData.map((direction) => (
              <DirectionItem
                key={direction.id}
                title={direction.attributes.title}
                icon={direction.attributes.icon.data?.attributes.url}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Directions;
