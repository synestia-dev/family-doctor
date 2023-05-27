import Button from "../../../../components/Button/Button.jsx";
import "./Banner.scss";
import { useTranslation } from "react-i18next";
const Banner = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="info__wrapper">
            <div className="info">
              <h1 className="info__title">{t("Преміум сімейна клініка")}</h1>
              <p className="info__text">
                {t(
                  "Наша клініка – це результат якісноі роботи. Клініка «Сімейний лікар» — місце, де ми зібрали все найкраще для роботи, не лише обладнання, а й людей. Тут реалізовано все, чого ми хотіли, про що мріяли і чого прагнемо."
                )}
              </p>
              <div className="info__btn">
                <Button text="Обрати лікаря" color="choose default" />
                <Button text="Дізнатися більше" color="transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
