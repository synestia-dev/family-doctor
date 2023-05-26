import "./OurAdvantages.scss";

import { ADVANTAGES_DATA } from "../../../../assets/dummy/dummy-data.jsx";
import CardItem from "../../../../components/CardItem/CardItem.jsx";
const OurAdvantages = () => {
  return (
    <div className="advantages">
      <div className="container">
        <h2 className="advantages__title">
          Чому вам варто обрати Сімейну Лікарню?
        </h2>
        <div className="advantages__list">
          {ADVANTAGES_DATA.map((advantage, index) => (
            <CardItem
              title={advantage.title}
              text={advantage.text}
              key={index}
              icon={advantage.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurAdvantages;
