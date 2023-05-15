import { useState } from "react";
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

function App() {
  const [cards, setCards] = useState([
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
    { name: "thailand", isClicked: false, image: chicagoImg },
    { name: "texas", isClicked: false, image: chicagoImg },
  ]);
  return (
    <>
      {cards.map((card, index) => (
        <div key={index} className=' w-16'>
          <img src={card.image} alt='chicago' className='w-full' />
        </div>
      ))}
    </>
  );
}

export default App;
