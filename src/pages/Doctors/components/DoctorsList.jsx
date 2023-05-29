import "./DoctorsList.scss";
import { Link } from "react-router-dom";
import DoctorsItem from "./DoctorsItem/DoctorsItem.jsx";
import { useEffect, useState } from "react";
import { getRequest } from "../../../api/index.js";
import Loader from "../../../components/Loader/Loader.jsx";

const DoctorsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [doctorsData, setDoctorsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest(`doctors/?populate=photo`);
        if (response && response.data) {
          console.log(response.data);
          setDoctorsData(response.data);
        }
      } catch (error) {
        console.log("Error fetching doctor data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="list">
        <h3>Стоматологія</h3>
        <div className="lost__content">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="list__items">
              {doctorsData.map(({ attributes, id }) => (
                <Link to={`/doctors/${id}`} key={id}>
                  <DoctorsItem attributes={attributes} id={id} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DoctorsList;
