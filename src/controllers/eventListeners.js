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
            if (e.detail.placingPlayer) {
                e.detail.placingPlayer === 'playerOne' ? domManager.showCells(elements.boardOne) : domManager.showCells(elements.boardTwo);
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
        console.debug('restart event fired.');
        elements.boardOne.innerHTML = '';
        elements.boardTwo.innerHTML = '';
        elements.gameOverDialog.close();
        domManager.showInitialDialog();
        domManager.renderBoard(elements.boardOne);
        domManager.renderBoard(elements.boardTwo);
        domManager.resetFleetManagers();
        controller.initialize();
        elements.randomPlaceOne.removeAttribute('disabled');
        elements.randomPlaceTwo.removeAttribute('disabled');
        elements.doneButtonOne.removeAttribute('disabled');
        elements.doneButtonTwo.removeAttribute('disabled');
    });

    eventBus.addEventListener('controllerCreated', (e) => {
        domManager.controller = e.detail.controller;
    });

    eventBus.addEventListener('cellClicked', (e) => {
        if (e.detail.targetPlayer === 'playerOne' && controller.activePlayer === controller.playerTwo) {
            controller.attackOnPlayerOne(e.detail.coordinates);
        } else if (e.detail.targetPlayer === 'playerTwo' && controller.activePlayer === controller.playerOne) {
            controller.attackOnPlayerTwo(e.detail.coordinates);
        };
    });

    eventBus.addEventListener('shipsReadyForPlacement', () => {
        domManager.placingPhase = true;
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

        if (domManager.placingPlayer === 'playerOne') {
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
            };
        } else if (domManager.placingPlayer === 'playerTwo') {
            switch (ship) {
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
            };
            
        };

        const player = targetPlayer === 'playerOne' ? controller.playerOne : controller.playerTwo;
        const placingPlayer = domManager.placingPlayer === 'playerOne' ? controller.playerOne : controller.playerTwo;

        if (!shipToPlace.isPlaced) {
            placingPlayer === player && controller.placingTurn.gameBoard.place(shipToPlace, coordinates, orientation);
        };

        dispatchGridComposed(controller);
        
        if (isModalityHumanVsHuman(controller) && controller.placingTurn === controller.playerTwo) {
            domManager.showCells(elements.boardTwo);
            domManager.hideCellsValues(elements.boardOne);
        } else {
            domManager.showCells(elements.boardOne);
            domManager.hideCellsValues(elements.boardTwo);
        };
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
        domManager.updateTurnBoard(controller.activePlayer, null);

        elements.randomPlaceOne.disabled = true;
        elements.randomPlaceTwo.disabled = true;
        elements.doneButtonOne.disabled = true;
        elements.doneButtonTwo.disabled = true;

        const activeBoard = controller.activePlayer === controller.playerOne ? elements.boardOne : elements.boardTwo;
        const inactiveBoard = controller.activePlayer === controller.playerOne ? elements.boardTwo : elements.boardOne;

        if (isModalityHumanVsHuman(controller)) {
            domManager.showCells(activeBoard);
            domManager.hideCellsValues(inactiveBoard);
        };

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

    eventBus.addEventListener('shipSunk', (e) => {
        const { ship } = e.detail;

        if (controller.activePlayer === controller.playerTwo) {
            switch (ship.symbol) {
                case 'A':
                    domManager.changeShipClass('carrier-1', 'hit');
                    break;
                case 'B':
                    domManager.changeShipClass('battleship-1', 'hit');
                    break;
                case 'C':
                    domManager.changeShipClass('cruiser-1', 'hit');
                    break;
                case 'S':
                    domManager.changeShipClass('submarine-1', 'hit');
                    break;
                case 'D':
                    domManager.changeShipClass('destroyer-1', 'hit');
                    break;
            };
        } else {
            switch (ship.symbol) {
                case 'A':
                    domManager.changeShipClass('carrier-2', 'hit');
                    break;
                case 'B':
                    domManager.changeShipClass('battleship-2', 'hit');
                    break;
                case 'C':
                    domManager.changeShipClass('cruiser-2', 'hit');
                    break;
                case 'S':
                    domManager.changeShipClass('submarine-2', 'hit');
                    break;
                case 'D':
                    domManager.changeShipClass('destroyer-2', 'hit');
                    break;
            };
        };            
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

    elements.doneButtonOne.addEventListener('click', () => {
        if (controller.playerOne.gameBoard.allShipsPlaced()) {
            if (isModalityHumanVsHuman(controller)) {
                domManager.manageManualPlacing('player-2');
                domManager.updateTurnBoard(null, controller.playerTwo);
                controller.placingTurn = controller.playerTwo;
            } else {
                controller.composeGameBoard(controller.playerTwo);
                controller.startGame();
            };
        };     
    });

    elements.doneButtonTwo.addEventListener('click', () => {
        if (controller.placingTurn === controller.playerTwo && controller.playerTwo.gameBoard.allShipsPlaced()) {
            domManager.placingPhase = false;

            elements.carrierTwo.removeAttribute('draggable');
            elements.battleshipTwo.removeAttribute('draggable');
            elements.cruiserTwo.removeAttribute('draggable');
            elements.submarineTwo.removeAttribute('draggable');
            elements.destroyerTwo.removeAttribute('draggable');

            controller.startGame();
        }
    });
};


