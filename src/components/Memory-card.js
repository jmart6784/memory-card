import React, { useState } from "react";

const MemoryCard = () => {
  const [guesses, setGuesses] = useState([]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
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

  let handleChoice = (guess) => {
    let guessTemp = guesses;

    if (guessTemp.includes(guess)) {
      randomOrder();
      setGuesses([]);
      if (score > topScore) {
        setTopScore(score);
        setScore(0);
      } else {
        setScore(0);
      }
    } else {
      randomOrder();
      setScore(score + 1);
      setGuesses(guessTemp.concat(guess));
    }
  };

  let key = 0;

  return (
    <div>
      <h1 id="game-title">Memory card</h1>
      <h2 className="game-description">
        Click on celebrities to raise your score but don't click any more than
        once!
      </h2>

      <div className="score-div">
        <h2 className="score-count">Score: {score}</h2>
        <h2>Top Score: {topScore}</h2>
      </div>

      <div className="celeb-grid">
        {images.map((image) => (
          <div
            onClick={() => handleChoice(image[1])}
            key={key++}
            className="card-container"
          >
            <div
              className="celeb-image"
              style={{
                backgroundImage: `url(${image[0]})`,
              }}
            ></div>
            <h3 className="card-info">Name: {image[1]}</h3>
            <h5 className="card-info">Occupation: {image[2]}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryCard;
