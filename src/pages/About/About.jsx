import './About.scss'
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loader from '../../components/Loader/Loader';
const About = () => {
  return (
    <>
      <Header />
      <section className="about">
        <div className="container">
          <Loader />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
