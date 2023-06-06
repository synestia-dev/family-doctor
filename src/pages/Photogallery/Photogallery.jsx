import { useState, useRef } from "react";
import "./Photogallery.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import photogalleryItem from "../../assets/icons/photogallery-item.png";
import photogalleryItem2 from "../../assets/icons/photogallery-item2.png";
import photogalleryItem3 from "../../assets/icons/photogallery-item3.png";
import photogalleryItem4 from "../../assets/icons/photogallery-item4.png";
import arrowLeft from "../../assets/icons/arrow-icon.svg";
import arrowRight from "../../assets/icons/arrow-icon-right.svg";
import { RxCross1 } from "react-icons/rx";

const Photogallery = () => {
  const images = [
    photogalleryItem,
    photogalleryItem2,
    photogalleryItem3,
    photogalleryItem4,
    photogalleryItem,
    photogalleryItem2,
    photogalleryItem3,
    photogalleryItem4,
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const overlayRef = useRef(null);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const closeOverlay = (e) => {
    if (e.target === overlayRef.current) {
      setSelectedImage(null);
      setCurrentIndex(0);
    }
  };

  return (
    <>
      <Header />
      <div className="photogallery">
        <div className="container">
          <h2 className="photogallery__title">Фотогалерея</h2>
          <div className="photogallery__list">
            {images.map((item, index) => (
              <div
                className="picture"
                key={index}
                onClick={() => handleImageClick(item, index)}
              >
                <img src={item} alt={item} className="picture__image" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

      {selectedImage && (
        <>
          <div className="overlay" onClick={closeOverlay} ref={overlayRef}>
            <div className="close" onClick={() => setSelectedImage(null)}>
              <RxCross1 size={20} color={"#F8F8F8"} />
            </div>
            <img
              src={arrowLeft}
              alt="left"
              className="arrow arrow--left"
              onClick={handlePreviousImage}
            />
            <img
              src={selectedImage}
              alt={selectedImage}
              className="overlay__image"
            />
            <img
              src={arrowRight}
              alt="right"
              className="arrow arrow--right"
              onClick={handleNextImage}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Photogallery;
