import "./CardItem.scss";
import PropTypes from "prop-types";
import FamilyIcon from "../../assets/iconComponents/FamilyIcon.jsx";

const CardItem = ({ title, text, icon = <FamilyIcon />, padding = "" }) => {
  return (
    <div className="advantage">
      <div className="advantage__circle">{icon}</div>
      <div className={`advantage__info ${padding}`}>
        <h5 className="advantage__title">{title}</h5>
        <p className="advantage__text">{text}</p>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  padding: PropTypes.string,
  icon: PropTypes.element,
};

export default CardItem;
