import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getRequest } from "../../api";
const Directions = () => {
  getRequest("/directions");
  return (
    <>
      <Header />
      <section className="directions">Directions</section>
      <Footer />
    </>
  );
};

export default Directions;
