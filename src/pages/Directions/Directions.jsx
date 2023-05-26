import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Directions.scss";
import { getRequest } from "../../api";
// import { ALL_SERVICES } from "../../assets/dummy/dummy-data.jsx";
import CardItem from "../../components/CardItem/CardItem.jsx";

const Directions = () => {
  const [directionsData, setDirectionsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest("directions?populate=icon");
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
          <h2 className="directions__title">Наші напрямки</h2>
          <div className="directions__list">
            {directionsData.map((direction) => (
              <CardItem
                key={direction.id}
                title={direction.attributes.title}
                padding="specs"
                icon={`${import.meta.env.VITE_API_URL}${direction.attributes.icon.data?.attributes.url}`}
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
