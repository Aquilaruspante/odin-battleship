import { elements } from './DOMElements.js';
import eventBus from "../utils/eventBus.js";

import battleshipImage from '../assets/images/battleship.webp';

export default class DOMManager {
    constructor () {
        this.gridOne = Array.from({ length: 10 }, () => Array(10).fill(null));
        this.gridTwo = Array.from({ length: 10 }, () => Array(10).fill(null));
        this.dragged = null;
        this.orientationOne = 'vertical';
        this.orientationTwo = 'vertical';
        this.placingPhase = false;
    };

    setBackgroundImage() {
        elements.backgroundImage.setAttribute('src', battleshipImage);
    };

    getGrids(grids) {
        this.gridOne = grids[0];
        this.gridTwo = grids[1];
    };

    renderHit(receiver, result, coordinates) {
        const [row, col] = coordinates;
        const board = receiver === 'playerOne' ? elements.boardOne : elements.boardTwo;
        const boardName = board === elements.boardOne ? '.gameboard-1' : '.gameboard-2';
        const cellX = document.querySelector(`${boardName} .row-${row}`);
        
        if (result === 'hit') {
            cellX.children[col].classList.toggle('hit');
        } else if (result === 'miss') {
            cellX.children[col].classList.toggle('miss');
        };
    };
    
    showInitialDialog() {
        elements.initialDialog.showModal();
        elements.playerTwoName.value = 'Computer';
        elements.playerTwoName.setAttribute('disabled', true);
    };
    
    initGame() {
        this.setBackgroundImage();
        elements.startGameButton.addEventListener('click', () => {
            this.startGame();
            elements.initialDialog.close();
        });
        this.renderBoard(elements.boardOne);
        this.renderBoard(elements.boardTwo);
        console.debug('Boards rendered');
    };
    
    startGame() {
        const modality = elements.selectModality.value;
        const playerOneName = elements.choosePlayerOneName.value;
        const playerTwoName = elements.choosePlayerTwoName.value;
    
        eventBus.dispatchEvent(new CustomEvent('createController', { detail: { modality, playerOneName, playerTwoName }}));
    };
    
    renderTimeOut(activePlayerName) {
        elements.timeOutDialog.showModal();
        elements.yourTurn.innerText = `${activePlayerName} get ready!`;
        let timeOutCounter = 3;
        elements.counter.innerText = timeOutCounter;
        const interval = setInterval(() => {
            timeOutCounter--;
            elements.counter.innerText = timeOutCounter;
            if (timeOutCounter === 0) {
                clearInterval(interval);
                setTimeout(() => {
                    elements.timeOutDialog.close();
                }, 1000);
            };
        }, 1000);
    };
    
    updateTurnBoard(activePlayer, placingTurn = null) {
        if (activePlayer) {
            elements.turnBoardTitle.innerText = 'Active Player';
            elements.turnBoardActivePlayer.innerText = activePlayer.name;
        } else if (placingTurn) {
            elements.turnBoardTitle.innerText = 'Place Ships';
            elements.turnBoardActivePlayer.innerHTML = `<b>${placingTurn.name}</b> drag and drop your ships on the board`;
        }
    };
    
    managePlayAgainButton() {
        elements.playAgainButton.addEventListener('click', () => {
            eventBus.dispatchEvent(new Event('restartGame'));
        });
    };
    
    renderBoard(DOMBoard) {
        const targetPlayer = DOMBoard === elements.boardOne ? 'playerOne': 'playerTwo';

        for (let x = 0; x < 10; x++) {
            const row = document.createElement('div');
            row.setAttribute('class', `row row-${x}`);
            
            for (let y = 0; y < 10; y++) {
                const col = document.createElement('div');
                col.setAttribute('class', `col col-${y}`);
                
                col.addEventListener('click', () => {
                    eventBus.dispatchEvent(new CustomEvent('cellClicked', { detail: { targetPlayer, coordinates: [x, y] }}));
                });

                col.addEventListener('dragover', (event) => {
                    event.preventDefault();
                }, false);
                col.addEventListener('drop', (event) => {
                    event.preventDefault();
                    if (this.placingPhase) {
                        const orientation = targetPlayer === 'playerOne' ? this.orientationOne : this.orientationTwo;
                        eventBus.dispatchEvent(new CustomEvent('placeShip', { detail: { ship: this.dragged, coordinates: [x, y], targetPlayer, orientation }}, { once: true }));
                    };      
                });
                row.appendChild(col);
            };
            DOMBoard.appendChild(row);
        };
    };
    
    showCells(board) {
        const gameBoardgrid = board === elements.boardOne ? this.gridOne : this.gridTwo;
        const domBoardName = board === elements.boardOne ? 'gameboard-1' : 'gameboard-2';
    
        gameBoardgrid.forEach((gameBoardRow, rowIndex) => {
            const domRow = document.querySelector(`.${domBoardName} .row-${rowIndex}`);
            const domRowCells = Array.from(domRow.children);
    
            gameBoardRow.forEach((gameBoardCell, colIndex) => {
                gameBoardgrid[rowIndex][colIndex] !== null && domRowCells[colIndex].classList.add('ship');
            });
        });
    };

    hideCellsValues(board) {
        const gameBoardgrid = board === elements.boardOne ? this.gridOne : this.gridTwo;
        const domBoardName = board === elements.boardOne ? 'gameboard-1' : 'gameboard-2';
    
        gameBoardgrid.forEach((gameBoardRow, rowIndex) => {
            const domRow = document.querySelector(`.${domBoardName} .row-${rowIndex}`);
            const domRowCells = Array.from(domRow.children);
    
            gameBoardRow.forEach((gameBoardCell, colIndex) => {
                domRowCells[colIndex].classList.remove('ship');
            });
        });
    };
    
    renderGameOverDialog(winner) {
        elements.winnerAnnounce.innerText = `${winner.name} won!!!`;
        elements.gameOverDialog.showModal();
        this.managePlayAgainButton();
    };

    manageManualPlacing(player) {
        if (player === 'player-1') {
            this.placingPlayer = 'playerOne';
            this.showCells(elements.boardOne);
            this.hideCellsValues(elements.boardTwo);

            elements.carrierOne.addEventListener('dragstart', () => {
                this.dragged = 'carrier-1';
            });
            elements.carrierOne.addEventListener('dragend', () => {
                this.dragged = null;
            });

            elements.battleshipOne.addEventListener('dragstart', () => {
                this.dragged = 'battleship-1';
            });
            elements.battleshipOne.addEventListener('dragend', () => {
                this.dragged = null;
            });

            elements.cruiserOne.addEventListener('dragstart', () => {
                this.dragged = 'cruiser-1';
            });
            elements.cruiserOne.addEventListener('dragend', () => {
                this.dragged = null;
            });

            elements.submarineOne.addEventListener('dragstart', () => {
                this.dragged = 'submarine-1';
            });
            elements.submarineOne.addEventListener('dragend', () => {
                this.dragged = null;
            });

            elements.destroyerOne.addEventListener('dragstart', () => {
                this.dragged = 'destroyer-1';
            });
            elements.destroyerOne.addEventListener('dragend', () => {
                this.dragged = null;
            }); 

        } else if (player === 'player-2') {
            this.placingPlayer = 'playerTwo';
            this.showCells(elements.boardTwo);
            this.hideCellsValues(elements.boardOne);

            elements.carrierOne.setAttribute('draggable', false);
            elements.battleshipOne.setAttribute('draggable', false);
            elements.cruiserOne.setAttribute('draggable', false);
            elements.submarineOne.setAttribute('draggable', false);
            elements.destroyerOne.setAttribute('draggable', false);

            elements.carrierTwo.setAttribute('draggable', true);
            elements.battleshipTwo.setAttribute('draggable', true);
            elements.cruiserTwo.setAttribute('draggable', true);
            elements.submarineTwo.setAttribute('draggable', true);
            elements.destroyerTwo.setAttribute('draggable', true);


            elements.carrierTwo.addEventListener('dragstart', () => {
                this.dragged = 'carrier-2';
            });
            elements.carrierTwo.addEventListener('dragend', () => {
                this.dragged = null;
            });

            elements.battleshipTwo.addEventListener('dragstart', () => {
                this.dragged = 'battleship-2';
            });
            elements.battleshipTwo.addEventListener('dragend', () => {
                this.dragged = null;
            });

            elements.cruiserTwo.addEventListener('dragstart', () => {
                this.dragged = 'cruiser-2';
            });
            elements.cruiserTwo.addEventListener('dragend', () => {
                this.dragged = null;
            });

            elements.submarineTwo.addEventListener('dragstart', () => {
                this.dragged = 'submarine-2';
            });
            elements.submarineTwo.addEventListener('dragend', () => {
                this.dragged = null;
            });

            elements.destroyerTwo.addEventListener('dragstart', () => {
                this.dragged = 'destroyer-2';
            });
            elements.destroyerTwo.addEventListener('dragend', () => {
                this.dragged = null;
            }); 
        }
    };

    resetFleetManagers() {
        for (let child of elements.carrierOne.children) {
            child.classList.remove('hit');
        };
        for (let child of elements.battleshipOne.children) {
            child.classList.remove('hit');
        };
        for (let child of elements.cruiserOne.children) {
            child.classList.remove('hit');
        };
        for (let child of elements.submarineOne.children) {
            child.classList.remove('hit');
        };
        for (let child of elements.destroyerOne.children) {
            child.classList.remove('hit');
        };

        for (let child of elements.carrierTwo.children) {
            child.classList.remove('hit');
        };
        for (let child of elements.battleshipTwo.children) {
            child.classList.remove('hit');
        };
        for (let child of elements.cruiserTwo.children) {
            child.classList.remove('hit');
        };
        for (let child of elements.submarineTwo.children) {
            child.classList.remove('hit');
        };
        for (let child of elements.destroyerTwo.children) {
            child.classList.remove('hit');
        };
    }

    changeShipClass(ship, selectedClass) {
        switch (ship) {
            case 'carrier-1':
                for (let child of elements.carrierOne.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'battleship-1':
                for (let child of elements.battleshipOne.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'cruiser-1':
                for (let child of elements.cruiserOne.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'submarine-1':
                for (let child of elements.submarineOne.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'destroyer-1':
                for (let child of elements.destroyerOne.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'carrier-2':
                for (let child of elements.carrierTwo.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'battleship-2':
                for (let child of elements.battleshipTwo.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'cruiser-2':
                for (let child of elements.cruiserTwo.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'submarine-2':
                for (let child of elements.submarineTwo.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'destroyer-2':
                for (let child of elements.destroyerTwo.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
        };
    };
};