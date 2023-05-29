import "./DoctorsItem.scss";
import PropTypes from "prop-types";

const DoctorsItem = ({ attributes }) => {
  return (
    <div className="person">
      <img
        className="person__image"
        src={attributes?.photo?.data[0].attributes?.url}
        alt="icon"
      />
      <div className="person__info">
        <h4 className="person__title">
          {attributes.name} {attributes.surname} {attributes.patronymic}
        </h4>
        <p className="person__text">{attributes.description}</p>
      </div>
    </div>
  );
};

// DoctorsItem.propTypes = {
//   attributes: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     surname: PropTypes.string.isRequired,
//     patronymic: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     photo: PropTypes.shape({
//       data: PropTypes.shape({
//         attributes: PropTypes.shape({
//           url: PropTypes.string.isRequired,
//         }).isRequired,
//       }).isRequired,
//     }),
//   }).isRequired,
// };
export default DoctorsItem;
