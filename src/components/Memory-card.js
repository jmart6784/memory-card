import React, { useState } from "react";

const MemoryCard = () => {
  const [images, setImages] = useState([
    "images/img1.jpg",
    "images/img2.png",
    "images/img3.jpeg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg",
    "images/img7.jpg",
    "images/img8.jpg",
    "images/img9.jpg",
    "images/img10.jpg",
    "images/img11.jpg",
    "images/img12.jpg",
  ]);

  const randomOrder = () => {
    let array = [].concat(images);

    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    setImages(array);
  };

  let key = 0;

  return (
    <div>
      <h1>Memory card</h1>
      {images.map((image) => (
        <div key={key++}>
          <div
            className="celeb-image"
            style={{
              height: "200px",
              width: "175px",
              border: "3px solid blue",
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat, repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
            key={key++}
          ></div>
        </div>
      ))}
      <button onClick={randomOrder}>Random</button>
    </div>
  );
};

export default MemoryCard;
