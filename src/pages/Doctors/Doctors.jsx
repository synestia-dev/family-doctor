import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Doctors.scss";
import DoctorsList from "./components/DoctorsList.jsx";
const Doctors = () => {
  return (
    <>
      <Header />
      <section className="doctors">
        <div className="container">
          <DoctorsList />
          <DoctorsList />
          <DoctorsList />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Doctors;
