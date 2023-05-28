import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Doctor.scss";

const Doctor = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <section className="doctor">
        <div className="container">Doctor {id}</div>
      </section>
      <Footer />
    </>
  );
};

export default Doctor;
