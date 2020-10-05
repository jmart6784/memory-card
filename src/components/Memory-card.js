import React, { useState } from "react";

const MemoryCard = () => {
  const [images, setImages] = useState([
    ["images/img1.jpg", "Seth Rogan", "Actor"],
    ["images/img2.png", "Joe Rogan", "Comedian, Commentator"],
    ["images/img3.jpeg", "Tom Hanks", "Actor"],
    ["images/img4.jpg", "Dwanye Johnson", "Actor, Pro Wrestler"],
    ["images/img5.jpg", "Jennifer Lawrence", "Actress"],
    ["images/img6.jpg", "Chadwick Boseman", "Actor"],
    ["images/img7.jpg", "Natalie Portman", "Actress"],
    ["images/img8.jpg", "Emma Stone", "Actress"],
    ["images/img9.jpg", "Jonah Hill", "Actor"],
    ["images/img10.jpg", "Michael Cera", "Actor"],
    ["images/img11.jpg", "Adam Sandler", "Actor, Comedian"],
    ["images/img12.jpg", "Will Smith", "Actor, Rapper"],
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

  let test = (h) => {
    console.log(h);
  };

  let key = 0;

  return (
    <div>
      <h1>Memory card</h1>

      <div className="celeb-grid">
        {images.map((image) => (
          <div key={key++} className="card-container">
            <div
              className="celeb-image"
              style={{
                backgroundImage: `url(${image[0]})`,
              }}
              onClick={test(key)}
            ></div>
            <h3>Name: {image[1]}</h3>
            <h4>Occupation: {image[2]}</h4>
          </div>
        ))}
      </div>

      <button onClick={randomOrder}>Random</button>
    </div>
  );
};

export default MemoryCard;
