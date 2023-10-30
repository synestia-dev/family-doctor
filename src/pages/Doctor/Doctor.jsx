import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Doctor.scss";

import { useEffect, useLayoutEffect, useState } from "react";
import { getRequest } from "../../api/index.js";
import { useTranslation } from "react-i18next";
import Loader from "../../components/Loader/Loader.jsx";

const Doctor = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [doctorData, setDoctorData] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await getRequest(`doctors/${id}/?populate=photo`);
        const response2 = await getRequest(
          `doctors/${id}/?populate=specializations`
        );

        if (response1 && response1.data) {
          console.log(response1.data);
          setDoctorData(response1.data);
        }

        if (response2 && response2.data) {
          console.log(response2.data.attributes.specializations.data);
          setSpecializations(response2.data.attributes.specializations.data);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="doctor">
        <div className="container">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {" "}
              <h1 className="fullname">
                {doctorData.attributes?.surname} {doctorData.attributes?.name}{" "}
                {doctorData.attributes?.patronymic}
              </h1>
              <div className="doctor__info">
                <div className="doctor__desc">
                  <h1 className="doctor__fullname">
                    {t(doctorData.attributes?.surname)}{" "}
                    {t(doctorData.attributes?.name)}{" "}
                    {t(doctorData.attributes?.patronymic)}
                  </h1>
                  {/* <p className="doctor__text">
                    {doctorData.attributes?.description}
                  </p> */}
                </div>

                <div
                  className="doctor__image"
                  style={{
                    backgroundImage: `url(${doctorData?.attributes?.photo?.data[0].attributes?.url})`,
                  }}
                ></div>
              </div>
              <div className="specialization">
                <h3 className="specialization__title">
                  {t("Медична спеціалізація")}
                </h3>
                <div className="specialization__list">
                  {specializations.map((s) => {
                    const { id, attributes } = s;
                    return (
                      <Link
                        to="/doctors"
                        key={id}
                        className="specialization__list_item"
                      >
                        <span>{t(attributes.title)}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Doctor;
