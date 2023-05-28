import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "../../pages/Home/components/Banner/Banner.jsx";
import "./Home.scss";
import Offer from "./components/Offer/Offer.jsx";
import OurAdvantages from "../../pages/Home/components/OurAdvantages/OurAdvantages.jsx";
import horizontalLogo from "../../assets/icons/horizontal-logo.svg";
import NewsList from "../../components/NewsList/NewsList.jsx";
const Home = () => {
  return (
    <>
      <Header />
      <section className="home">
        <Banner />
        <Offer />
        <OurAdvantages />
        <div className="container">
          <img
            src={horizontalLogo}
            alt={horizontalLogo}
            className="horizontal-logo"
          />
        </div>
        <NewsList />
      </section>
      <Footer />
    </>
  );
};

export default Home;
