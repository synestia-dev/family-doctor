import "./OurAdvantages.scss";
import AdvantageItem from "./AdvantageItem/AdvantageItem.jsx";
import { ADVANTAGES_DATA } from "../../../../assets/dummy/dummy-data.jsx";
const OurAdvantages = () => {
  return (
    <div className="advantages">
      <div className="container">
        <h2 className="advantages__title">
          Чому вам варто обрати Сімейну Лікарню?
        </h2>
        <div className="advantages__list">
          {ADVANTAGES_DATA.map((advantage, index) => (
            <AdvantageItem
              title={advantage.title}
              text={advantage.text}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurAdvantages;
