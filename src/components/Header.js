// Import react
import { useState } from 'react'
// Import react-bootstrap components
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
// Import CSS
import '../css/header.css'
// Import component
import HelpSidebar from './HelpSidebar'

const Header = ({moves, bestScore, handleRestart}) => {
   const [showHelpSidebar, setShowHelpSidebar] = useState(false);

   // Close sidebar
   const handleClose = () => setShowHelpSidebar(false);
   // Open sidebar
   const handleShow = () => setShowHelpSidebar(true);

   return (
      <div className="header">
         <div className="help-button">
            {/* Overlay to give more info about the purpose of the button */}
            <OverlayTrigger 
               overlay={
                  <Tooltip id="button-tooltip-1">
                     Need some help?
                  </Tooltip>
               } 
               placement="bottom-start"
            >
               {/* Show help sidebar */}
               <Button variant="secondary" onClick={handleShow}>Help</Button>
            </OverlayTrigger>
         </div>
         {/* Displays the player's highest score */}
         <div className="best-score">
            {/* Check if there is a best score in local storage, if yes then display best score, if no then display no record */}
            Best Score: {localStorage.getItem("bestScore") ? (<span>{bestScore}</span>) : (<span>No Record</span>)}
         </div>
         {/* Name of the game */}
         <div className="game-name">Test Your Memory</div>
         {/* Display number of moves */}
         <div className="moves">Moves: {moves}</div>
         <div className="restart-button">
            {/* Overlay to give more info about the purpose of the button */}
            <OverlayTrigger
               overlay={
                  <Tooltip id="button-tooltip-2">
                     Want to start again?
                  </Tooltip>
               } 
               placement="bottom-end"
            >
               {/* Button to restart the game */}
               <Button variant="secondary" onClick={handleRestart}>Restart</Button>
            </OverlayTrigger>
         </div>
         {/* Sidebar will show when help button is clicked */}
         <HelpSidebar 
            showHelpSidebar={showHelpSidebar}
            handleClose={handleClose}
         />
      </div>
   )
}

export default Header
