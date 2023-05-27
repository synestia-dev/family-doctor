import "./DirectionItem.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const DirectionItem = ({ title, icon }) => {
  const {t} = useTranslation()
  return (
    <Link to="/direction">
      <div className="direction">
        <div className="direction__circle">
          <img src={icon} alt="icon" />
        </div>
        <div className="direction__info">
          <h5 className="direction__title">{t(title)}</h5>
        </div>
      </div>
    </Link>
  );
};

DirectionItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default DirectionItem;
