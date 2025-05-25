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
    
    renderBoardOne() {
        this.renderBoard(elements.boardOne);
    };
    
    renderBoardTwo() {
        this.renderBoard(elements.boardTwo);
    };
    
    showInitialDialog() {
        elements.initialDialog.showModal();
    };
    
    initGame() {
        this.setBackgroundImage();
        elements.startGameButton.addEventListener('click', () => {
            this.startGame();
            elements.initialDialog.close();
        });
        this.renderBoardOne();
        this.renderBoardTwo();
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
        let timeOutCounter = 5;
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
                    const orientation = targetPlayer === 'playerOne' ? this.orientationOne : this.orientationTwo;
                    eventBus.dispatchEvent(new CustomEvent('placeShip', { detail: { ship: this.dragged, coordinates: [x, y], targetPlayer, orientation }}));
                })
                row.appendChild(col);
            }
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
};