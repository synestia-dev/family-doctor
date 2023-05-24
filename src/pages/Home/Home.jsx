import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner.jsx";
import "./Home.scss";
import About from "../../components/About/About.jsx";
import Button from "../../components/Button/Button.jsx";
import OurAdvantages from "../../components/OurAdvantages/OurAdvantages.jsx";
import horizontalLogo from "../../assets/icons/horizontal-logo.svg";
import News from "../../components/News/News.jsx";
const Home = () => {
  return (
    <>
      <Header />
      <section className="home">
        <Banner />
        <About />
        <Button to="" text="Записатись на прийом" className="reception-btn" />
        <OurAdvantages />
        <img
          src={horizontalLogo}
          alt={horizontalLogo}
          className="horizontal-logo"
        />
        <News />
        <Button to="" text="Усі наші статті" className="articles-btn" />
      </section>
      <Footer />
    </>
  );
};

export default Home;
