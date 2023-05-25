import "./About.scss";
import DentistIcon from "../../../../assets/ iconComponents/DentistIcon.jsx";
import GynecologistIcon from "../../../../assets/ iconComponents/GynecologistIcon.jsx";
import PsychologistIcon from "../../../../assets/ iconComponents/PsychologistIcon.jsx";
import TreatmentIcon from "../../../../assets/ iconComponents/TreatmentIcon.jsx";
import CardiologistIcon from "../../../../assets/ iconComponents/CardiologistIcon.jsx";
import TraumatologyIcon from "../../../../assets/ iconComponents/TraumatologyIcon.jsx";
import StomatologyIcon from "../../../../assets/ iconComponents/StomatologyIcon.jsx";
import PhysiotherapyIcon from "../../../../assets/ iconComponents/PhysiotherapyIcon.jsx";
import OtolaryngologistIcon from "../../../../assets/ iconComponents/OtolaryngologistIcon.jsx";
import OphthalmologyIcon from "../../../../assets/ iconComponents/OphthalmologyIcon.jsx";
import NarcologyIcon from "../../../../assets/ iconComponents/NarcologyIcon.jsx";
import DiagnosticIcon from "../../../../assets/ iconComponents/DiagnosticIcon.jsx";
import EndoscopicIcon from "../../../../assets/ iconComponents/EndoscopicIcon.jsx";
import ConsultationIcon from "../../../../assets/ iconComponents/ConsultationIcon.jsx";
import CheckupIcon from "../../../../assets/ iconComponents/CheckupIcon.jsx";
import UrologyIcon from "../../../../assets/ iconComponents/UrologyIcon.jsx";
import HospitalIcon from "../../../../assets/ iconComponents/HospitalIcon.jsx";
import LabaratoryIcon from "../../../../assets/ iconComponents/LaboratoryIcon.jsx";
import GynecologyIcon from "../../../../assets/ iconComponents/GynecologyIcon.jsx";
import DermatologyIcon from "../../../../assets/ iconComponents/DermatologyIcon.jsx";

const POPULAR_SERVICES = [
  {
    index: 0,
    title: "Стоматологія",
    icon: <DentistIcon />,
  },
  {
    index: 1,
    title: "Гінеколог",
    icon: <GynecologistIcon />,
  },
  {
    index: 2,
    title: "Психолог",
    icon: <PsychologistIcon />,
  },
  {
    index: 3,
    title: "Реабилитолог",
    icon: <TreatmentIcon />,
  },
  {
    index: 4,
    title: "Кардиолог",
    icon: <CardiologistIcon />,
  },
];
const ALL_SERVICES = [
  {
    index: 0,
    title: "Стоматология",
    icon: <StomatologyIcon />,
  },
  {
    index: 1,
    title: "Фізіотерапевтичні процедури",
    icon: <PhysiotherapyIcon />,
  },
  {
    index: 2,
    title: "Діагностичні послуги",
    icon: <DiagnosticIcon />,
  },
  {
    index: 3,
    title: "Отоларингологія",
    icon: <OtolaryngologistIcon />,
  },
  {
    index: 4,
    title: "Офтальмологія",
    icon: <OphthalmologyIcon />,
  },
  {
    index: 5,
    title: "Травматологія",
    icon: <TraumatologyIcon />,
  },
  {
    index: 6,
    title: "Наркологія",
    icon: <NarcologyIcon />,
  },
  {
    index: 7,
    title: "Ендоскопічні дослідження",
    icon: <EndoscopicIcon />,
  },
  {
    index: 8,
    title: "Консультації лікарів",
    icon: <ConsultationIcon />,
  },

  {
    index: 9,
    title: "Огляди лікарями",
    icon: <CheckupIcon />,
  },
  {
    index: 10,
    title: "Урологія",
    icon: <UrologyIcon />,
  },
  {
    index: 11,
    title: "Стаціонар",
    icon: <HospitalIcon />,
  },
  {
    index: 12,
    title: "Лабораторні дослідження",
    icon: <LabaratoryIcon />,
  },
  {
    index: 13,
    title: "Гінекологія",
    icon: <GynecologyIcon />,
  },
  {
    index: 14,
    title: "Дерматологія, онкологія",
    icon: <DermatologyIcon />,
  },
];
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__title">
          <h2 className="title">Які медичні послуги ми пропонуємо?</h2>
          <p className="text">Найбільш відвідувані послуги:</p>
        </div>
        <div className="services">
          <nav className="services__popular">
            {POPULAR_SERVICES.map((service, index) => (
              <li key={index} className="services__item">
                {service.icon}
                <span>{service.title}</span>
              </li>
            ))}
          </nav>
          <div className="services__catalogue">
            <ul className="catalogue__items">
              {ALL_SERVICES.slice(0, 5).map((service, index) => (
                <li key={index}>
                  {service.icon}
                  <span>{service.title}</span>
                </li>
              ))}
            </ul>

            <hr className="vertical-line" />

            <ul className="catalogue__items">
              {ALL_SERVICES.slice(5, 10).map((service, index) => (
                <li key={index}>
                  {service.icon}
                  <span>{service.title}</span>
                </li>
              ))}
            </ul>
            <hr className="vertical-line" />
            <ul className="catalogue__items">
              {ALL_SERVICES.slice(10, 15).map((service, index) => (
                <li key={index}>
                  {service.icon}
                  <span>{service.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
