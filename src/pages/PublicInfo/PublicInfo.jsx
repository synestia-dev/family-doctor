import "./PublicInfo.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useLayoutEffect } from "react";
import arrowRight from "../../assets/icons/public-info-arrow.svg";
const PublicInfo = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <section className="publicInfo">
        <div className="container">
          <div className="publicInfo__content">
            <h1 className="publicInfo__content_title">
              Доступ до публічної <br /> інформації
            </h1>
            <div>
              <h3>Законодавча база</h3>
              <hr />
              <div className="info">
                <div className="info__links">
                  <a href="#" className="">
                    <img src={arrowRight} alt={arrowRight} />
                    <p className="">
                      База даних «Законодавство України» на веб-сайті Верховної
                      Ради України.
                    </p>
                  </a>
                  <a href="#" className="">
                    <img src={arrowRight} alt={arrowRight} />
                    <p className="">
                      Нормативно-правові акти з питань охорони здоров’я МОЗ
                      України.
                    </p>
                  </a>
                </div>
                <p className="info__text">
                  Надання публічної інформації Запорізькою обласною клінічною
                  лікарнею здійснюється у відповідь на{" "}
                  <span>інформаційний запит.</span>
                  Електронна адреса:<span>cancelariya.zokb@gmail.com.</span>
                </p>
                <p className="info__text">
                  Згідно з законом, публічною є відображена та задокументована
                  будь-якими засобами та на будь- <br /> яких носіях інформація,
                  що була отримана або створена в процесі виконання суб’єктами
                  владних <br /> повноважень своїх обов’язків, передбачених
                  чинним законодавством, або яка знаходиться у володінні
                  суб’єктів владних повноважень.
                </p>
                <p className="info__text bold">
                  Запит від особи на отримання інформації складається у
                  довільній формі. <br />
                  При цьому необхідно вказати:
                </p>
                <p className="info__rules">
                  1) ім’я та прізвище запитувача, поштову адресу або адресу
                  електронної пошти, а також номер телефону;
                </p>
                <p className="info__rules">
                  2) опис інформації, яку запитувач хотів би отримати. (Вид,
                  назву, реквізити чи зміст документа, щодо якого зроблено
                  запит)
                </p>
                <p className="info__rules">3) підпис і дату.</p>
              </div>
              <div className="info__details">
                <p className="info__text bold">Лікарські засоби та вироби</p>
                <hr />
                <ul className="info__list">
                  <li>
                    <a href="#">
                      Актуальні залишки медикаментів та виробів медичного
                      призначення.
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Реєстр пацієнтів на імплантацію електрокардіостимуляторів
                      на 14.09.2018 р.
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Залишки лікарських засобів та виробів на 15.03.2021
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="info__text bold">Тендерні закупівлі</p>
                <hr />
                <ul className="info__list">
                  <li>
                    <a href="#">Фірмове канцелярське приладдя</a>
                  </li>
                  <li>
                    <a href="#">БФП (друк, сканування, копіювання)</a>
                  </li>
                  <li>
                    <a href="#">
                      Апарат для моніторингу внутрішньочерепного тиску з набором
                      датчиків
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PublicInfo;
