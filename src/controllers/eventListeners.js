import eventBus from "../utils/eventBus.js";
import isModalityHumanVsHuman from "../utils/switchModality.js";
import { domManager } from "../index.js";

export default function setEventListeners(domManager) {
    eventBus.addEventListener('attackResult', (e) => {
        domManager.renderHit(e.detail.receiver, e.detail.result, e.detail.coordinates);
    });

    eventBus.addEventListener('switchPlayer', (e) => {
        domManager.renderBoardOne();
        domManager.renderBoardTwo();
        if (isModalityHumanVsHuman()) {
            domManager.detailsrenderTimeOut();
            e.details.activePlayer === 'player-one' ? domManager.showCells('gameboard-1') : domManager.showCells('gameboard-2');
        } else {
            domManager.showCells('gameboard-1');
        }
    });

    eventBus.addEventListener('initBoard', (e) => {
        domManager.renderBoardOne();
        domManager.renderBoardTwo();
        if (isModalityHumanVsHuman()) {
            domManager.detailsrenderTimeOut();
            e.details.activePlayer === 'player-one' ? domManager.showCells('gameboard-1') : domManager.showCells('gameboard-2');
        } else {
            domManager.showCells('gameboard-1');
        }
    });

    eventBus.addEventListener('gridComposed', (e) => {
        domManager.getGrids([e.detail.gridOne, e.detail.gridTwo]);
    });
}