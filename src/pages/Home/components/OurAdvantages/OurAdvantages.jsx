import "./OurAdvantages.scss";
import AdvantageItem from "./AdvantageItem/AdvantageItem.jsx";

const ADVANTAGES_DATA = [
  {
    index: 0,
    title: "Обслуживание",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
  },
  {
    index: 1,
    title: "Обслуживание1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
  },
  {
    index: 2,
    title: "Обслуживание2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
  },
  {
    index: 3,
    title: "Обслуживание3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
  },
  {
    index: 4,
    title: "Обслуживание4",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
  },
  {
    index: 5,
    title: "Обслуживание5",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
  },
];
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
