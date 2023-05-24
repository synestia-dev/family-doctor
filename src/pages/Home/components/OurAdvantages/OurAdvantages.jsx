import "./OurAdvantages.scss";
import AdvantageItem from "./AdvantageItem/AdvantageItem.jsx";
const OurAdvantages = () => {
  return (
    <div className="advantages">
      <div className="container">
        <h2 className="advantages__title">
          Чому вам варто обрати Сімейну Лікарню?
        </h2>
        <div className="advantages__list">
          <AdvantageItem />
          <AdvantageItem />
          <AdvantageItem />
          <AdvantageItem />
          <AdvantageItem />
          <AdvantageItem />
        </div>
      </div>
    </div>
  );
};

export default OurAdvantages;
