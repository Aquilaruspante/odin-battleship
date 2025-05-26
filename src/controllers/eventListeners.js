import eventBus from "../utils/eventBus.js";
import isModalityHumanVsHuman from "../utils/switchModality.js";
import { elements } from "../views/DOMElements.js";
import { controller, createController } from "../index.js";

export function dispatchGridComposed(controller) {
    eventBus.dispatchEvent(new CustomEvent('gridComposed', { 
            detail: {
                gridOne: controller.playerOne.gameBoard.grid,
                gridTwo: controller.playerTwo.gameBoard.grid,
            }
        }));
}

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
            if (e.detail.activePlayer) {
                domManager.renderTimeOut(e.detail.activePlayer.name);
                e.detail.activePlayer === controller.playerOne ? domManager.showCells(elements.boardOne) : domManager.showCells(elements.boardTwo);
            };
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

    eventBus.addEventListener('shipsReadyForPlacement', () => {
        elements.carrierOne.setAttribute('draggable', true);
        elements.battleshipOne.setAttribute('draggable', true);
        elements.cruiserOne.setAttribute('draggable', true);
        elements.submarineOne.setAttribute('draggable', true);
        elements.destroyerOne.setAttribute('draggable', true);

        domManager.manageManualPlacing('player-1');
        domManager.updateTurnBoard(null, controller.playerOne);
    });

    eventBus.addEventListener('placeShip', (e) => {
        const { ship, coordinates, targetPlayer } = e.detail;
        
        const orientation = targetPlayer === 'playerOne' ? domManager.orientationOne : domManager.orientationTwo;

        let shipToPlace;

        switch (ship) {
            case 'carrier-1':
                shipToPlace = controller.playerOne.gameBoard.carrier;
                break;
            case 'battleship-1':
                shipToPlace = controller.playerOne.gameBoard.battleship;
                break;
            case 'cruiser-1':
                shipToPlace = controller.playerOne.gameBoard.cruiser;
                break;
            case 'submarine-1':
                shipToPlace = controller.playerOne.gameBoard.submarine;
                break;
            case 'destroyer-1':
                shipToPlace = controller.playerOne.gameBoard.destroyer;
                break;
            
            case 'carrier-2':
                shipToPlace = controller.playerTwo.gameBoard.carrier;
                break;
            case 'battleship-2':
                shipToPlace = controller.playerTwo.gameBoard.battleship;
                break;
            case 'cruiser-2':
                shipToPlace = controller.playerTwo.gameBoard.cruiser;
                break;
            case 'submarine-2':
                shipToPlace = controller.playerTwo.gameBoard.submarine;
                break;
            case 'destroyer-2':
                shipToPlace = controller.playerTwo.gameBoard.destroyer;
                break;
        }

        const player = targetPlayer === 'playerOne' ? controller.playerOne : controller.playerTwo;
        if (!shipToPlace.isPlaced) {
            controller.placingTurn === player && controller.placingTurn.gameBoard.place(shipToPlace, coordinates, orientation);
        };

        dispatchGridComposed(controller);
        (isModalityHumanVsHuman(controller) && controller.placingTurn === controller.playerTwo) ? domManager.showCells(elements.boardTwo) : domManager.showCells(elements.boardOne);
        controller.managePlacingTurns();
    });

    eventBus.addEventListener('shipPlaced', (e) => {
        const { ship } = e.detail;

        switch (ship) {
            case controller.playerOne.gameBoard.carrier:
               for (let child of elements.carrierOne.children) {
                child.classList.toggle('miss');
               };
               break;
            case controller.playerOne.gameBoard.battleship:
               for (let child of elements.battleshipOne.children) {
                child.classList.toggle('miss');
               };
               break;
            case controller.playerOne.gameBoard.cruiser:
               for (let child of elements.cruiserOne.children) {
                child.classList.toggle('miss');
               };
               break;
            case controller.playerOne.gameBoard.submarine:
               for (let child of elements.submarineOne.children) {
                child.classList.toggle('miss');
               };
               break;
            case controller.playerOne.gameBoard.destroyer:
               for (let child of elements.destroyerOne.children) {
                child.classList.toggle('miss');
               };
               break;

            case controller.playerTwo.gameBoard.carrier:
               for (let child of elements.carrierTwo.children) {
                child.classList.toggle('miss');
               };
               break;
            case controller.playerTwo.gameBoard.battleship:
               for (let child of elements.battleshipTwo.children) {
                child.classList.toggle('miss');
               };
               break;
            case controller.playerTwo.gameBoard.cruiser:
               for (let child of elements.cruiserTwo.children) {
                child.classList.toggle('miss');
               };
               break;
            case controller.playerTwo.gameBoard.submarine:
               for (let child of elements.submarineTwo.children) {
                child.classList.toggle('miss');
               };
               break;
            case controller.playerTwo.gameBoard.destroyer:
               for (let child of elements.destroyerTwo.children) {
                child.classList.toggle('miss');
               };
               break;
        };
    });

    eventBus.addEventListener('startGame', () => {
        elements.randomPlaceOne.disabled = true;
        elements.randomPlaceTwo.disabled = true;

        elements.startGameDialog.showModal();

        setTimeout(() => {
            elements.startGameDialog.close();
        }, 1500);

        for (let child of elements.carrierOne.children) {
            child.classList.toggle('miss');
        };
        for (let child of elements.battleshipOne.children) {
            child.classList.toggle('miss');
        };
        for (let child of elements.cruiserOne.children) {
            child.classList.toggle('miss');
        };
        for (let child of elements.submarineOne.children) {
            child.classList.toggle('miss');
        };
        for (let child of elements.destroyerOne.children) {
            child.classList.toggle('miss');
        };

        for (let child of elements.carrierTwo.children) {
            child.classList.toggle('miss');
        };
        for (let child of elements.battleshipTwo.children) {
            child.classList.toggle('miss');
        };
        for (let child of elements.cruiserTwo.children) {
            child.classList.toggle('miss');
        };
        for (let child of elements.submarineTwo.children) {
            child.classList.toggle('miss');
        };
        for (let child of elements.destroyerTwo.children) {
            child.classList.toggle('miss');
        };
    });

    eventBus.addEventListener('playerTwoPlacingTurn', () => {
        domManager.manageManualPlacing('player-2');
    });

    elements.horizontalOne.addEventListener('click', () => {
        elements.shipBoardOne.setAttribute('class', 'ships row-orientation');
        elements.carrierOne.setAttribute('class', 'ship-container container-column');
        elements.battleshipOne.setAttribute('class', 'ship-container container-column');
        elements.cruiserOne.setAttribute('class', 'ship-container container-column');
        elements.submarineOne.setAttribute('class', 'ship-container container-column');
        elements.destroyerOne.setAttribute('class', 'ship-container container-column');

        domManager.orientationOne = 'vertical';
    });

    elements.verticalOne.addEventListener('click', () => {
        elements.shipBoardOne.setAttribute('class', 'ships column-orientation');
        elements.carrierOne.setAttribute('class', 'ship-container container-row');
        elements.battleshipOne.setAttribute('class', 'ship-container container-row');
        elements.cruiserOne.setAttribute('class', 'ship-container container-row');
        elements.submarineOne.setAttribute('class', 'ship-container container-row');
        elements.destroyerOne.setAttribute('class', 'ship-container container-row');

        domManager.orientationOne = 'horizontal';
    });

    elements.horizontalTwo.addEventListener('click', () => {
        elements.shipBoardTwo.setAttribute('class', 'ships row-orientation');
        elements.carrierTwo.setAttribute('class', 'ship-container container-column');
        elements.battleshipTwo.setAttribute('class', 'ship-container container-column');
        elements.cruiserTwo.setAttribute('class', 'ship-container container-column');
        elements.submarineTwo.setAttribute('class', 'ship-container container-column');
        elements.destroyerTwo.setAttribute('class', 'ship-container container-column');

        domManager.orientationTwo = 'vertical';
    });

    elements.verticalTwo.addEventListener('click', () => {
        elements.shipBoardTwo.setAttribute('class', 'ships column-orientation');
        elements.carrierTwo.setAttribute('class', 'ship-container container-row');
        elements.battleshipTwo.setAttribute('class', 'ship-container container-row');
        elements.cruiserTwo.setAttribute('class', 'ship-container container-row');
        elements.submarineTwo.setAttribute('class', 'ship-container container-row');
        elements.destroyerTwo.setAttribute('class', 'ship-container container-row');

        domManager.orientationTwo = 'horizontal';
    });

    elements.randomPlaceOne.addEventListener('click', () => {
        if (!controller.playerOne.gameBoard.allShipsPlaced()) controller.composeGameBoard(controller.playerOne);
    });

    elements.randomPlaceTwo.addEventListener('click', () => {
        if (!controller.playerTwo.gameBoard.allShipsPlaced()) controller.composeGameBoard(controller.playerTwo);
    });
};


