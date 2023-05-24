import Button from "../Button/Button.jsx";
import "./Banner.scss";
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="info__wrapper">
            <div className="info">
              <h1 className="info__title">Преміум сімейна клініка</h1>
              <p className="info__text">
                Наша клініка – це результат якісноі роботи. Клініка «Сімейний
                лікар» — місце, де ми зібрали все найкраще для роботи, не лише
                обладнання, а й людей. Тут реалізовано все, чого ми хотіли, про
                що мріяли і чого прагнемо.
              </p>
              <div className="info__btn">
                <Button text="Обрати лікаря" className="choose-btn" />
                <Button text="Дізнатися більше" className="more-btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
