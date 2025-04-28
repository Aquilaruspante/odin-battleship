import eventBus from "../utils/eventBus.js";
import isModalityHumanVsHuman from "../utils/switchModality.js";
import { elements } from "../views/DOMElements.js";
import { controller, createController } from "../index.js";

export default function setEventListeners(domManager) {
    eventBus.addEventListener('attackResult', (e) => {
        domManager.renderHit(e.detail.receiver, e.detail.result, e.detail.coordinates);
    });

    eventBus.addEventListener('switchPlayer', (e) => {
        if (isModalityHumanVsHuman()) {
            domManager.renderTimeOut();
            e.detail.activePlayer === controller.playeOne ? domManager.showCells(elements.boardOne) : domManager.showCells(elements.boardTwo);
        } else {
            domManager.showCells(elements.boardOne);
        };
        domManager.updateTurnBoard(e.detail.activePlayer);
    });

    eventBus.addEventListener('initBoard', (e) => {
        domManager.renderBoardOne();
        domManager.renderBoardTwo();
        if (isModalityHumanVsHuman()) {
            domManager.renderTimeOut();
            e.detail.activePlayer === 'player-one' ? domManager.showCells(elements.boardOne) : domManager.showCells(elements.boardTwo);
        } else {
            domManager.showCells(elements.boardOne);
        };
        domManager.updateTurnBoard(e.detail.activePlayer);
    });

    eventBus.addEventListener('gridComposed', (e) => {
        domManager.getGrids([e.detail.gridOne, e.detail.gridTwo]);
    });

    eventBus.addEventListener('gameOver', (e) => {
        domManager.renderGameOverDialog(e.detail.winner);
    });

    eventBus.addEventListener('createController', (e) => {
        const { modality, playerOneName, playerTwoName } = e.detail;
        createController(modality, playerOneName, playerTwoName);
    });

    eventBus.addEventListener('restartGame', () => {
        domManager.showInitialDialog();
        domManager.initGame();
    });
};