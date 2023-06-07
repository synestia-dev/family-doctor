import { useEffect } from "react";
import "./DoctorsList.scss";
import { Link } from "react-router-dom";
import DoctorsItem from "./DoctorsItem/DoctorsItem.jsx";
import PropTypes from "prop-types";

const DoctorsList = ({ title, doctorsList }) => {
  useEffect(() => {});
  return (
    <>
      <section className="list">
        <h3>{title}</h3>
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
DoctorsList.propTypes = {
  title: PropTypes.string.isRequired,
  doctorsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      attributes: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        patronymic: PropTypes.string.isRequired,
        photo: PropTypes.shape({
          data: PropTypes.arrayOf(
            PropTypes.shape({
              attributes: PropTypes.shape({
                url: PropTypes.string.isRequired,
              }).isRequired,
            })
          ).isRequired,
        }).isRequired,
        position: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};
export default DoctorsList;
