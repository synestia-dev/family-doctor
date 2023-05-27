import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "../../pages/Home/components/Banner/Banner.jsx";
import "./Home.scss";
import About from "../../pages/Home/components/About/About.jsx";
import Button from "../../components/Button/Button.jsx";
import OurAdvantages from "../../pages/Home/components/OurAdvantages/OurAdvantages.jsx";
import horizontalLogo from "../../assets/icons/horizontal-logo.svg";
import News from "../../pages/Home/components/News/News.jsx";
const Home = () => {
  return (
    <>
      <Header />
      <section className="home">
        <Banner />
        <About />
        <OurAdvantages />
        <div className="container">
          <img
            src={horizontalLogo}
            alt={horizontalLogo}
            className="horizontal-logo"
          />
        </div>
        <News />
        <Button to="" text="Усі наші статті" color="articles" />
      </section>
      <Footer />
    </>
  );
};

export default Home;
