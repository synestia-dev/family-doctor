import "./AboutDoctor.scss";
import PropTypes from "prop-types";

const AboutDoctor = ({ doctorData }) => {
  console.log(doctorData);

  return (
    <div className="about">
      <div className="about__desc">
        <h2>
          {doctorData?.name} {doctorData?.surname} {doctorData?.patronymic}
        </h2>
        <p className="about__text">{doctorData?.description}</p>
      </div>
      <div className="about__image" />
    </div>
  );
};

AboutDoctor.propTypes = {
  doctorData: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    patronymic: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default AboutDoctor;
