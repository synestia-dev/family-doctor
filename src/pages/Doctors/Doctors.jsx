// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import "./Doctors.scss";
// import DoctorsList from "./components/DoctorsList.jsx";
// import { useEffect, useState } from "react";
// import { getRequest } from "../../api/index.js";
// import Loader from "../../components/Loader/Loader.jsx";
//
// const Doctors = () => {
//   const [doctorsDirectionsData, setDoctorsDirectionData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getRequest(
//           `specializations?populate=doctors&populate=doctors.photo`
//         );
//         if (response && response.data) {
//           console.log(response.data);
//           setDoctorsDirectionData(response.data);
//         }
//       } catch (error) {
//         console.log("Error fetching directions doctors data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//
//     fetchData();
//   }, []);
//
//   return (
//     <>
//       <Header />
//       <section className="doctors">
//         <div className="container">
//           {isLoading ? (
//             <Loader />
//           ) : (
//             <>
//               {doctorsDirectionsData.map(({ attributes, id }) => (
//                 <DoctorsList
//                   key={id}
//                   title={attributes.title}
//                   doctorsList={attributes.doctors.data}
//                 />
//               ))}
//             </>
//           )}
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };
// export default Doctors;

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Doctors.scss";
import DoctorsList from "./components/DoctorsList/DoctorsList.jsx";
import { useEffect, useState } from "react";
import { getRequest } from "../../api/index.js";
import Loader from "../../components/Loader/Loader.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

const Doctors = () => {
  const [doctorsDirectionsData, setDoctorsDirectionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getRequest(
        `specializations?populate=doctors&populate=doctors.photo&pagination[page]=${page}&pagination[pageSize]=2`
      );
      if (response && response.data) {
        console.log(response.data);
        setDoctorsDirectionData((prevData) => {
          const newData = prevData.filter(
            (existingItem) =>
              !response.data.some((item) => item.id === existingItem.id)
          );
          return [...newData, ...response.data];
        });
        setPage((prevPage) => prevPage + 1);
      }
      if (!response.data || response.data.length === 0) {
        setHasMoreData(false);
      }
    } catch (error) {
      console.log("Error fetching directions doctors data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // console.log(doctorsDirectionsData);
  return (
    <>
      <Header />
      <section className="doctors">
        <div className="container">
          {isLoading ? (
            <Loader />
          ) : (
            <InfiniteScroll
              dataLength={doctorsDirectionsData.length}
              next={fetchData}
              hasMore={hasMoreData}
              loader={false}
            >
              {doctorsDirectionsData.map(
                ({ attributes, id }, index) =>
                  attributes.doctors.data && (
                    <DoctorsList
                      key={`${id}-${index}`}
                      title={attributes.title}
                      doctorsList={attributes.doctors.data}
                    />
                  )
              )}
            </InfiniteScroll>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Doctors;
