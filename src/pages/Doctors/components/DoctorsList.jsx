import "./DoctorsList.scss";
import DoctorsItem from "./DoctorsItem/DoctorsItem.jsx";
const DoctorsList = () => {
  return (
    <>
      <section className="list">
        <h3>Стоматологія</h3>
        <div className="list__items">
          <DoctorsItem />
          <DoctorsItem />
          <DoctorsItem />
          <DoctorsItem />

          <DoctorsItem />
          <DoctorsItem />
          <DoctorsItem />
          <DoctorsItem />
        </div>
      </section>
    </>
  );
};

export default DoctorsList;
