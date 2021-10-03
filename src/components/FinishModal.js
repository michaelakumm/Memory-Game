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
            show={showFinishModal}
            size="lg"
            centered
         >
            <Modal.Header>
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
                  You completed the game in {moves} moves.
               </p>
               <p>
                  Your best score is {bestScore} moves.
               </p>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleRestart}>Restart</Button>
            </Modal.Footer>
         </Modal>
   )
}

export default FinishModal
