import { useEffect, useState } from "react";
import chicagoImg from "./imgs/chicago.jpg";
import parisImg from "./imgs/paris.jpg";
import newYorkImg from "./imgs/newYork.jpg";
import brazilImg from "./imgs/brazil.jpg";
import romeImg from "./imgs/rome.jpg";
import floridaImg from "./imgs/florida.jpg";
import californiaImg from "./imgs/california.jpg";
import coloradoImg from "./imgs/colorado.jpg";
import jamaicaImg from "./imgs/jamaica.jpg";
import japanImg from "./imgs/japan.jpg";
import thailandImg from "./imgs/thailand.jpg";
import texasImg from "./imgs/texas.jpg";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

function App() {
  const [places, setPlaces] = useState([
    { name: "chicago", isClicked: false, image: chicagoImg },
    { name: "paris", isClicked: false, image: parisImg },
    { name: "newYork", isClicked: false, image: newYorkImg },
    { name: "brazil", isClicked: false, image: brazilImg },
    { name: "rome", isClicked: false, image: romeImg },
    { name: "florida", isClicked: false, image: floridaImg },
    { name: "california", isClicked: false, image: californiaImg },
    { name: "colorado", isClicked: false, image: coloradoImg },
    { name: "jamaica", isClicked: false, image: jamaicaImg },
    { name: "japan", isClicked: false, image: japanImg },
    { name: "thailand", isClicked: false, image: thailandImg },
    { name: "texas", isClicked: false, image: texasImg },
  ]);

  const [shuffledOrder, setShuffledOrder] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const shuffleArray = () => {
    const shuffled = [...places];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledOrder(shuffled);
  };

  const handleCardClick = (cardId) => {
    let resetScore = false;
    const updatedPlaces = places.map((place) => {
      if (place.name === cardId) {
        if (place.isClicked) {
          resetScore = true;
          const newScore = score;
          // setBestScore(newScore);
          // setScore(0);
        } else {
          setScore((prevScore) => prevScore + 1);
        }
        return { ...place, isClicked: true };
      }
      return place;
    });

    if (resetScore) {
      setPlaces(updatedPlaces.map((place) => ({ ...place, isClicked: false })));
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
    } else {
      setPlaces(updatedPlaces);
    }
  };

  useEffect(() => {
    shuffleArray();
  }, [places]);

  return (
    <>
      <Header score={score} bestScore={bestScore} />

      <div className=' grid grid-cols-4 gap-4 p-4 justify-items-center items-center'>
        {shuffledOrder.map((card, index) => (
          <Card data={card} key={index} handleCardClick={handleCardClick} />
        ))}
      </div>
    </>
  );
}

export default App;
