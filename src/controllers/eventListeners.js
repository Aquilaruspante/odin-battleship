import eventBus from "../utils/eventBus.js";
import isModalityHumanVsHuman from "../utils/switchModality.js";
import { domManager } from "../index.js";
import { elements } from "../views/DOMElements.js";

export default function setEventListeners(domManager) {
    eventBus.addEventListener('attackResult', (e) => {
        domManager.renderHit(e.detail.receiver, e.detail.result, e.detail.coordinates);
    });

    eventBus.addEventListener('switchPlayer', (e) => {
        if (isModalityHumanVsHuman()) {
            domManager.detailsrenderTimeOut();
            e.details.activePlayer === 'player-one' ? domManager.showCells(elements.boardOne) : domManager.showCells(elements.boardTwo);
        } else {
            domManager.showCells(elements.boardOne);
        }
    });

    eventBus.addEventListener('initBoard', (e) => {
        domManager.renderBoardOne();
        domManager.renderBoardTwo();
        if (isModalityHumanVsHuman()) {
            domManager.detailsrenderTimeOut();
            e.details.activePlayer === 'player-one' ? domManager.showCells(elements.boardOne) : domManager.showCells(elements.boardTwo);
        } else {
            domManager.showCells(elements.boardOne);
        }
    });

    eventBus.addEventListener('gridComposed', (e) => {
        domManager.getGrids([e.detail.gridOne, e.detail.gridTwo]);
    });
}