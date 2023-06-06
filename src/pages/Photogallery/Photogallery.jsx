import { useState, useEffect } from "react";
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
const Photogallery = () => {

  const [openedModal, setOpenedModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (i) =>{
    setOpenedModal(true);
    setCurrentImage(i);
  }
  const prevImage = () => {
    if(currentImage === 0){
      setCurrentImage(images.length -1)
    } else{
      setCurrentImage(prev => prev-1)
    }

  }
  const nextImage = () => {
    if(currentImage === images.length -1){
      setCurrentImage(0)
    } else{
      setCurrentImage(prev => prev+1)
    }
  }

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
                onClick={() => handleImageClick(index)}
              >
                <img src={item} alt={item} className="picture__image" />
              </div>
            ))}
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
            <div className="cross" onClick={() => setOpenedModal(prev => !prev)}>
              <RxCross1 size={36} color={"#F8F8F8"} />
            </div>

            <img
              src={images[currentImage]}
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
