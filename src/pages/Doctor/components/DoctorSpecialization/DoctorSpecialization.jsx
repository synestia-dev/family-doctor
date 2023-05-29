import "./DoctorSpecialization.scss";
import { useEffect, useState } from "react";
import { getRequest } from "../../../../api/index.js";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const DoctorSpecialization = () => {
  const [specializations, setSpecializations] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest("directions?populate=icon&sort=id");
        if (response && response.data) {
          console.log(response.data);
          setSpecializations(response.data);
        }
      } catch (error) {
        console.log("Error fetching directions data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="specialization">
      <h3 className="specialization__title">Медична спеціалізація</h3>
      <div className="specialization__list">
        {specializations.map(({ attributes, id }) => (
          <Link to="/" key={id} className="specialization__list_item">
            <img src={attributes.icon.data?.attributes.url} alt="icon" />
            <span>{t(attributes.title)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DoctorSpecialization;
