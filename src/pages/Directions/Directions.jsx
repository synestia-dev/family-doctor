import { useState, useEffect, useLayoutEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Directions.scss";
import { getRequest } from "../../api";
import DirectionItem from "./components/DirectionItem/DirectionItem.jsx";
import { useTranslation } from "react-i18next";
import Loader from "../../components/Loader/Loader.jsx";
const Directions = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [directionsData, setDirectionsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest("directions?populate=icon&sort=id");
        if (response && response.data) {
          const sortedData = [...response.data].sort((a, b) =>
            a.attributes.title.localeCompare(b.attributes.title)
          );
          console.log(sortedData);
          setDirectionsData(sortedData);
        }
      } catch (error) {
        console.log("Error fetching directions data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <section className="directions">
        <div className="container">
          <h1 className="directions__title">{t("Наші напрямки")}</h1>
          <div className="directions__content">
            {isLoading ? (
              <div className="loader">
                <Loader />
              </div>
            ) : (
              <div className="directions__list">
                {directionsData.map((direction) => (
                  <div key={direction.id}>
                    <DirectionItem
                      id={direction.id}
                      title={direction.attributes.title}
                      icon={direction.attributes.icon.data?.attributes.url}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Directions;
