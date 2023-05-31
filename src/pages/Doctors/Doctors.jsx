import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Doctors.scss";
import DoctorsList from "./components/DoctorsList.jsx";
import { useEffect, useState } from "react";
import { getRequest } from "../../api/index.js";
import Loader from "../../components/Loader/Loader.jsx";

const Doctors = () => {
  const [doctorsDirectionsData, setDoctorsDirectionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [fetching, setFetching] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest(
          `specializations?populate=doctors&populate=doctors.photo`
        );
        if (response && response.data) {
          console.log(response.data);
          setDoctorsDirectionData(response.data);
        }
      } catch (error) {
        console.log("Error fetching directions doctors data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section className="doctors">
        <div className="container">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {doctorsDirectionsData.map(({ attributes, id }) => (
                <DoctorsList
                  key={id}
                  title={attributes.title}
                  doctorsList={attributes.doctors.data}
                />
              ))}
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Doctors;
