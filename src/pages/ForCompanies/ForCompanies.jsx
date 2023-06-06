import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./ForCompanies.scss";
import itemIcon from "../../assets/icons/forCompaniesIcon.svg";
import { useLayoutEffect } from "react";

const items = [
  {
    id: 1,
    title: "Профілактичні огляди робітників згідно наказів МОЗ №246 та №280",
    image: itemIcon,
  },
  {
    id: 2,
    title: "Профілактичні огляди робітників згідно наказів МОЗ №246 та №280",
    image: itemIcon,
  },
  {
    id: 3,
    title: "Профілактичні огляди робітників згідно наказів МОЗ №246 та №280",
    image: itemIcon,
  },
  {
    id: 4,
    title: "Профілактичні огляди робітників згідно наказів МОЗ №246 та №280",
    image: itemIcon,
  },
  {
    id: 5,
    title: "Профілактичні огляди робітників згідно наказів МОЗ №246 та №280",
    image: itemIcon,
  },
  {
    id: 6,
    title: "Профілактичні огляди робітників згідно наказів МОЗ №246 та №280",
    image: itemIcon,
  },
  {
    id: 7,
    title: "Профілактичні огляди робітників згідно наказів МОЗ №246 та №280",
    image: itemIcon,
  },
];
const ForCompanies = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <section className="forCompanies">
        <div className="container">
          <h2>Для компаній</h2>
          <div className="forCompanies__list">
            {items.map((item) => (
              <div className="forCompanies__list_item" key={item.id}>
                <img src={item.image} alt="icon" />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="forCompanies__feedback">
          <div className="container">
            <div className="block">
              <h3>У вас є питання щодо медичної пропозиції для компаній?</h3>
              <div>
                <p>Напишіть нам</p>
                <a href="mailto:Shyroke_likar@ukr.net">Shyroke_likar@ukr.net</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ForCompanies;
