import "./DirectionItem.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const DirectionItem = ({ title, icon, id }) => {
  // console.log(key);
  const { t } = useTranslation();
  return (
    <Link to={`/directions/${id}`}>
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
  key: PropTypes.number,
};

export default DirectionItem;
