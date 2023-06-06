import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./ForCompanies.scss";
import { useLayoutEffect } from "react";
const ForCompanies = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <section className="forCompanies">
        <div className="container">ForCompanies</div>
      </section>
      <Footer />
    </>
  );
};

export default ForCompanies;
