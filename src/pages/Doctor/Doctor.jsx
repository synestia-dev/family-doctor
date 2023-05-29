import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Doctor.scss";
import { useEffect, useState } from "react";
import { getRequest } from "../../api/index.js";
import AboutDoctor from "./components/AboutDoctor/AboutDoctor.jsx";
import DoctorSpecialization from "./components/DoctorSpecialization/DoctorSpecialization.jsx";

const Doctor = () => {
  const { id } = useParams();
  const [doctorData, setDoctorData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest(`doctors/${id}`);
        if (response && response.data) {
          console.log(response.data);
          setDoctorData(response.data);
        }
      } catch (error) {
        console.log("Error fetching doctor data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Header />
      <section className="doctor">
        <div className="container">
          <AboutDoctor doctorData={doctorData.attributes} />
          <DoctorSpecialization />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Doctor;
