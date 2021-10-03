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

   const handleClose = () => setShowHelpSidebar(false);
   const handleShow = () => setShowHelpSidebar(true);

   return (
      <div className="header">
         <OverlayTrigger 
            overlay={
               <Tooltip id="button-tooltip-1">
                  Need some help?
               </Tooltip>
            } 
            placement="bottom-start"
         >
            <Button variant="secondary" onClick={handleShow}>Help</Button>
         </OverlayTrigger>
         {localStorage.getItem("bestScore") && (
            <div className="best-score">
               Best Score: {bestScore}
            </div>
         )}
         <div className="game-name">Test Your Memory</div>
         <div className="moves">Moves: {moves}</div>
         <OverlayTrigger
            overlay={
               <Tooltip id="button-tooltip-2">
                  Want to start again?
               </Tooltip>
            } 
            placement="bottom-end"
         >
            <Button variant="secondary" onClick={handleRestart}>Restart</Button>
         </OverlayTrigger>
         <HelpSidebar 
            showHelpSidebar={showHelpSidebar}
            handleClose={handleClose}
         />
      </div>
   )
}

export default Header
