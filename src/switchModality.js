import { gameController, renderBoardOne, renderBoardTwo } from "./index.js"

function modality() {
    if (gameController.playerTwo.type === 'human') {
        return 'human-human';
    } else if(gameController.playerTwo.type === 'computer') {
        return 'human-computer';
    };
};

export function manageBoardRendering() {
    if (modality() === 'human-human' && gameController.activePlayer === gameController.playeOne) {
        renderBoardOne();
    } else if(modality() === 'human-human' && gameController.activePlayer === gameController.playerTwo) {
        renderBoardTwo();
    };  
};
