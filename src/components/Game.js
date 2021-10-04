// Import from react
import { useEffect, useState, useRef } from "react";
// Import components
import Header from "./Header";
import Card from "./Card";
import FinishModal from "./FinishModal";
// Import CSS
import '../css/game.css'
// Import images
import Apple from '../images/Apple.gif';
import Banana from '../images/Banana.png';
import Cherries from '../images/Cherries.gif';
import Kiwi from '../images/Kiwi.png';
import Pineapple from '../images/Pineapple.gif';
import Strawberry from '../images/Strawberry.png';

// Card deck
const uniqueCardsArray = [{
      type: "Apple",
      image: Apple
   },
   {
      type: "Banana",
      image: Banana
   },
   {
      type: "Cherries",
      image: Cherries
   },
   {
      type: "Kiwi",
      image: Kiwi
   },
   {
      type: "Pineapple",
      image: Pineapple
   },
   {
      type: "Strawberry",
      image: Strawberry
   }
];

// Fisher Yates shuffle
function shuffleCards(array) {
   const length = array.length;
   for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
   }
   return array;
}

export default function Game() {
   const [cards, setCards] = useState(
      shuffleCards.bind(null, uniqueCardsArray.concat(uniqueCardsArray))
   );
   const [openCards, setOpenCards] = useState([]);
   const [clearedCards, setClearedCards] = useState({});
   const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
   const [moves, setMoves] = useState(0);
   const [showFinishModal, setShowFinishModal] = useState(false);
   const [bestScore, setBestScore] = useState(
      JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
   );
   const timeout = useRef(null);

   const disable = () => {
      setShouldDisableAllCards(true);
   };

   const enable = () => {
      setShouldDisableAllCards(false);
   };

   // Check if all cards have been matched
   const checkCompletion = () => {
      if (Object.keys(clearedCards).length === uniqueCardsArray.length) {
         // Show popup modal
         setShowFinishModal(true);
         // Set highest score
         const highScore = Math.min(moves, bestScore);
         setBestScore(highScore);
         // Save to local storage
         localStorage.setItem("bestScore", highScore);
      }
   };

   // Check if the two cards selected match
   const evaluate = () => {
      const [first, second] = openCards;
      enable();
      // If match then clear the two matching cards
      if (cards[first].type === cards[second].type) {
         setClearedCards((prev) => ({
            ...prev,
            [cards[first].type]: true
         }));
         setOpenCards([]);
         return;
      }
      // Flip the cards back after 500ms if not match
      timeout.current = setTimeout(() => {
         setOpenCards([]);
      }, 500);
   };

   // Adjust number of moves
   const handleCardClick = (index) => {
      if (openCards.length === 1) {
         setOpenCards((prev) => [...prev, index]);
         // Increase moves by one
         setMoves((moves) => moves + 1);
         disable();
      } else {
         clearTimeout(timeout.current);
         setOpenCards([index]);
      }
   };

   useEffect(() => {
      let timeout = null;
      if (openCards.length === 2) {
         timeout = setTimeout(evaluate, 300);
      }
      return () => {
         clearTimeout(timeout);
      };
   }, [openCards]);

   useEffect(() => {
      checkCompletion();
   }, [clearedCards]);

   const checkIsFlipped = (index) => {
      return openCards.includes(index);
   };

   const checkIsInactive = (card) => {
      return Boolean(clearedCards[card.type]);
   };

   // Shuffle and reset cards for another round
   const handleRestart = () => {
      setClearedCards({});
      setOpenCards([]);
      // Set finish modal
      setShowFinishModal(false);
      // Set number of moves
      setMoves(0);
      setShouldDisableAllCards(false);
      // Set a shuffled deck of cards
      setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
   };

   return ( 
      <div className="game">
         {/* Header containing game information */}
         <Header 
            moves={moves}
            bestScore={bestScore}
            handleRestart={handleRestart}
         />
         <div className="container">
            {/* Display cards */}
            {cards.map((card, index) => {
               return (
                  <Card
                     key={index}
                     card={card}
                     index={index}
                     isDisabled={shouldDisableAllCards}
                     isInactive={checkIsInactive(card)}
                     isFlipped={checkIsFlipped(index)}
                     onClick={handleCardClick}
                  />
               );
            })}
         </div>
         {/* Popup when game is over */}
         <FinishModal
            showFinishModal={showFinishModal}
            handleRestart={handleRestart}
            moves={moves}
            bestScore={bestScore}
         />
      </div>
   );
}