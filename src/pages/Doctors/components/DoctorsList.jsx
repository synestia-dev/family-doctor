import "./DoctorsList.scss";
import { Link } from "react-router-dom";
import DoctorsItem from "./DoctorsItem/DoctorsItem.jsx";
import { useEffect, useState } from "react";
import { getRequest } from "../../../api/index.js";
const DoctorsList = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest("doctors?populate=photo");
        if (response && response.data) {
          console.log(response.data);
          return setDoctorsData(response.data);
        }
      } catch (error) {
        console.log("Error fetching directions data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <section className="list">
        <h3>Стоматологія</h3>
        <div className="list__items">
          {doctorsData.map(({ attributes, id }) => (
            <Link to={`/doctors/${id}`} key={id}>
              <DoctorsItem attributes={attributes} id={id} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default DoctorsList;
