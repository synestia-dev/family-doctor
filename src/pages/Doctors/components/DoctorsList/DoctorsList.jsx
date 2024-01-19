/* eslint-disable react/prop-types */

import "./DoctorsList.scss";
import { Link } from "react-router-dom";
import DoctorsItem from "./DoctorsItem/DoctorsItem.jsx";
import { useTranslation } from "react-i18next";

const DoctorsList = ({ title, doctorsList }) => {
  const { t } = useTranslation();
  return (
    <>
      <section className="list">
        <h3>{t(title)}</h3>
        <div className="list__items">
          {doctorsList.map((item, index) => (
            <Link to={`/doctors/${item.id}`} key={index}>
              <DoctorsItem itemData={item.attributes} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default DoctorsList;
