import React from 'react';

import clothes from '../assets/clothes.jpg'
import laptop from '../assets/laptop.jpg'
import rings from '../assets/rings.jpg'


const ImageCarousel = () => {
  const images = [
    clothes,
    laptop,
    rings
  ];

  const [currentImage, setCurrentImage] = React.useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };


  return (
    <div className="relative w-7/12 mx-auto">
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="w-auto max-h-screen rounded-lg "
      />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full">
        <button
          onClick={prevImage}
          className="bg-gray-800 text-white px-2 py-1 rounded-md"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="bg-gray-800 text-white px-2 py-1 rounded-md"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
