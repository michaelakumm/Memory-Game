import React from "react";
import classnames from "classnames";
import '../css/card.css';
import BackOfCard from "../images/BackOfCard.png";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {

   // Handle card click
   const handleClick = () => {!isFlipped && !isDisabled && onClick(index)};

   return (
      <div
         // Add class name to say if the card is flipped or has been matched
         className={classnames("card", {
            "is-flipped": isFlipped,
            "is-inactive": isInactive
         })}
         onClick={handleClick}
      >
         {/* Card front */}
         <div className="card-face card-font-face">
            <img src={BackOfCard} alt="Front of card" />
         </div>
         {/* Card back */}
         <div className="card-face card-back-face">
            <img src={card.image} alt="Back of card" />
         </div>
      </div>
   );
};

export default Card;
