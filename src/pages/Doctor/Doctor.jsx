import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Doctor.scss";

import { useEffect, useState } from "react";
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
        const response2 = await getRequest(`directions?populate=icon&sort=id`);

        if (response1 && response1.data) {
          console.log(response1.data);
          setDoctorData(response1.data);
        }

        if (response2 && response2.data) {
          console.log(response2.data);
          setSpecializations(response2.data);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Header />
      <section className="doctor">
        <div className="container">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div className="doctor__info">
                <div className="doctor__desc">
                  <h2>
                    {doctorData.attributes?.surname} {doctorData.attributes?.name}{" "}
                {doctorData.attributes?.patronymic}
                  </h2>
                  <p className="doctor__text">
                    {doctorData.attributes?.description}
                  </p>
                </div>

                <img
                  className="doctor__image"
                  src={doctorData?.attributes?.photo?.data[0].attributes?.url}
                  alt="Image"
                />
              </div>
              <div className="specialization">
                <h3 className="specialization__title">Медична спеціалізація</h3>
                <div className="specialization__list">
                  {specializations.map(({ attributes, id }) => (
                    <Link to="/" key={id} className="specialization__list_item">
                      <img
                        src={attributes.icon.data?.attributes.url}
                        alt="icon"
                      />
                      <span>{t(attributes.title)}</span>
                    </Link>
                  ))}
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
