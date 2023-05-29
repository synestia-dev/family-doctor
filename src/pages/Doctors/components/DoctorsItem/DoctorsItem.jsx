import "./DoctorsItem.scss";
import PropTypes from "prop-types";
const DoctorsItem = ({ attributes }) => {
  return (
    <div className="person">
      <div className="person__image" />
      <div className="person__info">
        <h4 className="person__title">
          {attributes.name} {attributes.surname} {attributes.patronymic}
        </h4>
        <p className="person__text">{attributes.description}</p>
      </div>
    </div>
  );
};

DoctorsItem.propTypes = {
  attributes: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    patronymic: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoctorsItem;
