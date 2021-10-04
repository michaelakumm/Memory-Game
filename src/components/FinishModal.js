// Import react
import React from 'react'
// Import react-bootstrap components
import { Modal, Button } from 'react-bootstrap'
// Import CSS
import '../css/finishModal.css'
// Import image
import PartyPopper from '../images/PartyPopper.gif'

const FinishModal = ({showFinishModal, handleRestart, moves, bestScore}) => {
   return (
      <Modal
         // Show popup when game is complete
         show={showFinishModal}
         size="lg"
         // Center on page
         centered
      >
         <Modal.Header>
            {/* Title */}
            <Modal.Title>
               <img src={PartyPopper} alt="Party Popper Left" className="party-popper-left" />
               {" "}
               Hurray!!!You completed the challenge
               {" "}
               <img src={PartyPopper} alt="Party Popper Right" className="party-popper-right" />
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <p>
               {/* Display number of moves it took to complete the game */}
               You completed the game in {moves} moves.
            </p>
            <p>
               {/* Display their best score */}
               Your best score is {bestScore} moves.
            </p>
         </Modal.Body>
         <Modal.Footer>
            {/* Button to restart the game */}
            <Button variant="secondary" onClick={handleRestart}>Play Again?</Button>
         </Modal.Footer>
      </Modal>
   )
}

export default FinishModal
