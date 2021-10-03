import React from "react";
import classnames from "classnames";
import '../css/card.css';
import BackOfCard from "../images/BackOfCard.png";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {

   const handleClick = () => {
      !isFlipped && !isDisabled && onClick(index);
   };

   return (
      <div
         className={classnames("card", {
            "is-flipped": isFlipped,
            "is-inactive": isInactive
         })}
         onClick={handleClick}
      >
         <div className="card-face card-font-face">
            <img src={BackOfCard} alt="Back of card" />
         </div>
         <div className="card-face card-back-face">
            <img src={card.image} alt="Front of card" />
         </div>
      </div>
   );
};

export default Card;
