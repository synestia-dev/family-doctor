import "./AdvantageItem.scss";
import advantageIcon from "../../../assets/icons/advantage-icon.png";
const AdvantageItem = () => {
  return (
    <div className="advantage">
      <img
        className="advantage__circle"
        src={advantageIcon}
        alt={advantageIcon}
      />
      <div className="advantage__info">
        <h5 className="advantage__title">Обслуживание</h5>
        <p className="advantage__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500
        </p>
      </div>
    </div>
  );
};

export default AdvantageItem;
