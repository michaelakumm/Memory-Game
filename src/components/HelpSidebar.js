// Import react
import React from 'react'
// Import react-bootstrap components
import { Offcanvas, Button } from 'react-bootstrap'
// Import CSS
import '../css/helpSidebar.css'

// Instructions
const instructions = [
   "On the game board, there are always two identical images.",
   "Start the game by flipping a card.",
   "Then try to find another card that has the same image as the first.",
   "If you can't find a pair, the flipped cards will be flipped back with the face down.",
   "Try to remember these images as it becomes easier to find pairs the longer you play.",
   "When you find a pair they are removed from the board and when you find all the pairs in this memory, you have completed the game."
]

const HelpSidebar = ({showHelpSidebar, handleClose}) => {
   return (
      <Offcanvas show={showHelpSidebar} onHide={handleClose}>
         <Offcanvas.Header closeButton>
            <Offcanvas.Title>Need some help?</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
            <h5>Instructions</h5>
            <ul>
               {instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
               ))}
            </ul>
         </Offcanvas.Body>
      </Offcanvas>
   )
}

export default HelpSidebar
