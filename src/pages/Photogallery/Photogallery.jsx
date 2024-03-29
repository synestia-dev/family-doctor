import { useState, useEffect, useLayoutEffect } from "react";
import "./Photogallery.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import arrowLeft from "../../assets/icons/arrow-icon.svg";
import arrowRight from "../../assets/icons/arrow-icon-right.svg";
import Loader from "../../components/Loader/Loader";
import { getRequest } from "../../api/index.js";
import { RxCross1 } from "react-icons/rx";
import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";
import { useTranslation } from "react-i18next";
const Photogallery = () => {
  const [openedModal, setOpenedModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const matches768 = useMediaQuery("(max-width: 768px)");
  const matches500 = useMediaQuery("(max-width: 500px)");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest("photos?populate=src");
        if (response && response.data) {
          console.log(response.data);
          return setImages(response.data);
        }
      } catch (error) {
        console.log("Error fetching directions data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleImageClick = (i) => {
    setOpenedModal(true);
    setCurrentImage(i);
  };
  const prevImage = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage((prev) => prev - 1);
    }
  };
  const nextImage = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (openedModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [openedModal]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const crossSize = matches500 ? 24 : matches768 ? 30 : 36;

  return (
    <>
      <Header />
      <div className="photogallery">
        <div className="container">
          <h2 className="photogallery__title">{t("Фотогалерея")}</h2>
          <div className="photogallery__list">
            {isLoading ? (
              <div className="loader">
                <Loader />
              </div>
            ) : (
              images.map((item, index) => (
                <div
                  className="picture"
                  key={index}
                  onClick={() => handleImageClick(index)}
                >
                  <img src={item.attributes.src?.data?.attributes.url} alt={item} className="picture__image" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />

      {openedModal && (
        <div className="overlay">
          <img
            src={arrowLeft}
            alt="left"
            className="arrow-left"
            onClick={() => prevImage()}
          />
          <div className="overlay__inner">
            <div
              className="cross"
              onClick={() => setOpenedModal((prev) => !prev)}
            >
              <RxCross1 size={crossSize} color={"#F8F8F8"} />
            </div>

            <img
              src={images[currentImage].attributes.src?.data?.attributes.url}
              alt={`img-${currentImage}`}
              className="overlay__image"
            />
          </div>

          <img
            src={arrowRight}
            alt="rigth"
            className="arrow-right"
            onClick={() => nextImage()}
          />
        </div>
      )}
    </>
  );
};

export default Photogallery;
