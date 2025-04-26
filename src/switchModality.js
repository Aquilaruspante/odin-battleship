import { gameController, renderBoardOne, renderBoardTwo, boardOne, boardTwo } from "./index.js"

function isModalityHumanVsHuman() {
    return gameController.playerTwo.type === 'human' ? true : false;
};

export default function manageBoardRendering() {
    
    
    console.log('modality', modality());
    if (modality() === 'human-human' && gameController.activePlayer === gameController.playeOne) {
        console.log('human-hima');
        boardOne.innerHTML = '';
        renderBoardOne();
    } else if(modality() === 'human-human' && gameController.activePlayer === gameController.playerTwo) {

        boardTwo.innerHTML = '';
        renderBoardTwo();
    };  
};
