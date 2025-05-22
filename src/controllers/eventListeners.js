import eventBus from "../utils/eventBus.js";
import isModalityHumanVsHuman from "../utils/switchModality.js";
import { elements } from "../views/DOMElements.js";
import { controller, createController } from "../index.js";

export default function setEventListeners(domManager) {
    eventBus.addEventListener('attackResult', (e) => {
        const { receiver, result, coordinates } = e.detail;
        domManager.renderHit(receiver, result, coordinates);

        if (controller.activePlayer === controller.playerTwo && !isModalityHumanVsHuman(controller)) {
            controller.aiController.getAttackFeedback(result, coordinates);
        }
    });

    eventBus.addEventListener('isSunk', (e) => {
        controller.aiController.firstOrigin = null;
        controller.aiController.northPossible = true;
        controller.aiController.eastPossible = true;
        controller.aiController.southPossible = true;
        controller.aiController.westPossible = true;
    })

    eventBus.addEventListener('switchPlayer', (e) => {
        if (isModalityHumanVsHuman(controller)) {
            setTimeout(() => {
                domManager.renderTimeOut(e.detail.activePlayer.name);
                if (e.detail.activePlayer === controller.playerOne) {
                    domManager.showCells(elements.boardOne);
                    domManager.hideCellsValues(elements.boardTwo);
                } else if (e.detail.activePlayer === controller.playerTwo) {
                    domManager.showCells(elements.boardTwo);
                    domManager.hideCellsValues(elements.boardOne);
                }
            }, 500);
        } else {
            domManager.showCells(elements.boardOne);
            
            if (controller.activePlayer === controller.playerTwo) {
                setTimeout(() => {
                    controller.aiController.attack();
                }, 800);
            };
        };
        domManager.updateTurnBoard(e.detail.activePlayer);
    });

    eventBus.addEventListener('initBoard', (e) => {
        if (isModalityHumanVsHuman(controller)) {
            domManager.renderTimeOut(e.detail.activePlayer.name);
            e.detail.activePlayer === controller.playerOne ? domManager.showCells(elements.boardOne) : domManager.showCells(elements.boardTwo);
        } else {
            domManager.showCells(elements.boardOne);
        };
        domManager.updateTurnBoard(e.detail.activePlayer);
    });

    eventBus.addEventListener('gridComposed', (e) => {
        domManager.getGrids([e.detail.gridOne, e.detail.gridTwo]);
    });

    eventBus.addEventListener('gameOver', (e) => {
        setTimeout(() => {
            domManager.renderGameOverDialog(e.detail.winner);
        }, 300);
    });

    eventBus.addEventListener('createController', (e) => {
        const { modality, playerOneName, playerTwoName } = e.detail;
        createController(modality, playerOneName, playerTwoName);
    });

    eventBus.addEventListener('restartGame', () => {
        elements.boardOne.innerHTML = '';
        elements.boardTwo.innerHTML = '';
        elements.gameOverDialog.close();
        domManager.showInitialDialog();
    });

    eventBus.addEventListener('controllerCreated', (e) => {
        domManager.controller = e.detail.controller;
    });

    eventBus.addEventListener('cellClicked', (e) => {
        if (e.detail.targetPlayer === 'playerOne' && controller.activePlayer === controller.playerTwo) {
            controller.attackOnPlayerOne(e.detail.coordinates);
        } else if (e.detail.targetPlayer === 'playerTwo' && controller.activePlayer === controller.playerOne){
            controller.attackOnPlayerTwo(e.detail.coordinates);
        };
    });

    elements.horizontalOne.addEventListener('click', () => {
        elements.shipBoardOne.setAttribute('class', 'ships row-orientation');
        elements.carrierOne.setAttribute('class', 'ship-container container-column');
        elements.battleshipOne.setAttribute('class', 'ship-container container-column');
        elements.cruiserOne.setAttribute('class', 'ship-container container-column');
        elements.submarineOne.setAttribute('class', 'ship-container container-column');
        elements.destroyerOne.setAttribute('class', 'ship-container container-column');
    });

    elements.verticalOne.addEventListener('click', () => {
        elements.shipBoardOne.setAttribute('class', 'ships column-orientation');
        elements.carrierOne.setAttribute('class', 'ship-container container-row');
        elements.battleshipOne.setAttribute('class', 'ship-container container-row');
        elements.cruiserOne.setAttribute('class', 'ship-container container-row');
        elements.submarineOne.setAttribute('class', 'ship-container container-row');
        elements.destroyerOne.setAttribute('class', 'ship-container container-row');
    });

    elements.horizontalTwo.addEventListener('click', () => {
        elements.shipBoardTwo.setAttribute('class', 'ships row-orientation');
        elements.carrierTwo.setAttribute('class', 'ship-container container-column');
        elements.battleshipTwo.setAttribute('class', 'ship-container container-column');
        elements.cruiserTwo.setAttribute('class', 'ship-container container-column');
        elements.submarineTwo.setAttribute('class', 'ship-container container-column');
        elements.destroyerTwo.setAttribute('class', 'ship-container container-column');
    });

    elements.verticalTwo.addEventListener('click', () => {
        elements.shipBoardTwo.setAttribute('class', 'ships column-orientation');
        elements.carrierTwo.setAttribute('class', 'ship-container container-row');
        elements.battleshipTwo.setAttribute('class', 'ship-container container-row');
        elements.cruiserTwo.setAttribute('class', 'ship-container container-row');
        elements.submarineTwo.setAttribute('class', 'ship-container container-row');
        elements.destroyerTwo.setAttribute('class', 'ship-container container-row');
    });

    elements.randomPlaceOne.addEventListener('click', () => {
        if (!controller.playerOne.gameBoard.allShipsPlaced()) controller.composeGameBoard(controller.playerOne);
    });

    elements.randomPlaceTwo.addEventListener('click', () => {
        if (!controller.playerTwo.gameBoard.allShipsPlaced()) controller.composeGameBoard(controller.playerTwo);
    });
};


