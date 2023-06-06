import { useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import photogalleryItem from "../../assets/icons/photogallery-item.png";
import photogalleryItem2 from "../../assets/icons/photogallery-item2.png";
import "./Photogallery.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Photogallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = (index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const imageSources = [
    photogalleryItem,
    photogalleryItem2,
    photogalleryItem,
    photogalleryItem2,
    photogalleryItem,
  ];

  return (
    <>
      <Header />
      <div className="photogallery">
        <div className="container">
          <h2 className="photogallery__title">Фотогалерея</h2>
          <div className="photogallery__list">
            {imageSources.map((image, index) => (
              <div
                className="picture"
                key={index}
                onClick={() => openImageViewer(index)}
              >
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className="picture__image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      {isViewerOpen && (
        <ImageViewer
          src={imageSources}
          currentIndex={currentImage}
          disableScroll={true}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
          closeOnClickOutside={true}
          showArrowPrev={true}
          showArrowNext={true}
          showThumbnails={true}
        />
      )}
    </>
  );
};

export default Photogallery;
