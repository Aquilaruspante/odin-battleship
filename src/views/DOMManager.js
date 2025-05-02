import { elements } from './DOMElements.js';
import eventBus from "../utils/eventBus.js";

export default class DOMManager {
    constructor () {
        this.gridOne = null;
        this.gridTwo = null;
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
        elements.startGameButton.addEventListener('click', () => {
            this.startGame();
            elements.initialDialog.close();
        });
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
    
    updateTurnBoard(activePlayer) {
        elements.turnBoardActivePlayer.innerText = activePlayer.name;
    };
    
    managePlayAgainButton() {
        elements.playAgainButton.addEventListener('click', () => {
            eventBus.dispatchEvent(new Event('restartGame'));
        });
    };
    
    renderBoard(DOMBoard) {
        // Populates the DOM grid cells with ships.
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
                domRowCells[colIndex].innerText = gameBoardgrid[rowIndex][colIndex];
            });
        });
    };
    
    renderGameOverDialog(winner) {
        elements.winnerAnnounce.innerText = `${winner.name} won!!!`;
        elements.gameOverDialog.showModal();
    };
};