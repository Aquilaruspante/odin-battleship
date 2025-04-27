import GameController from "../controllers/gameController.js";
import { elements } from './DOMElements.js';
import isModalityHumanVsHuman from "../utils/switchModality.js";

export let controller;

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
        const board = receiver === controller.playerOne ? elements.boardOne : elements.boardTwo;
        const boardName = board === elements.boardOne ? '.gameboard-1' : '.gameboard-2';
        const cellX = document.querySelector(`${boardName} .row-${row}`);
        
        if (result === 'hit') {
            cellX.children[col].classList.toggle('hit');
        } else if (result === 'miss') {
            cellX.children[col].classList.toggle('miss');
        };
    };
    
    renderBoardOne() {
        this.renderBoard(controller.attackOnPlayerOne.bind(controller), elements.boardOne);
    };
    
    renderBoardTwo() {
        this.renderBoard(controller.attackOnPlayerTwo.bind(controller), elements.boardTwo);
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
    
        controller = new GameController(modality, playerOneName, playerTwoName);
        controller.initialize();
    };
    
    renderTimeOut() {
        elements.timeOutDialog.showModal();
        elements.doNotLook.innerText = controller.activePlayer === controller.playerOne ? `${controller.playerTwo.name} look away!` : `${controller.playerOne.name} look away!`;
        elements.yourTurn.innerText = controller.activePlayer === controller.playerOne ? `${controller.playerOne.name} get ready!` : `${controller.playerTwo.name} get ready!`;
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
    
    addEvent(col, event, controller, player, board, x, y) {
        if (isModalityHumanVsHuman()) {
            col.addEventListener(event, () => {
                if (player === controller.activePlayer) {
                    col.innerText = board[x][y];
                } else {
                    col.innerText = '';
                }
            });
        } else {
            if (board[x][y] !== null && player.type === 'human') {
                col.innerText = board[x][y];
            };
        };
    };
    
    updateTurnBoard(controller) {
        elements.turnBoardActivePlayer.innerText = controller.activePlayer.name;
    };
    
    managePlayAgainButton(attackFunctionOnOne, attackFunctionOnTwo, DOMBoardOne, DOMBoardTwo, controller) {
        elements.playAgainButton.addEventListener('click', () => {
            DOMBoardOne.innerHTML = '';
            DOMBoardTwo.innerHTML = '';
            controller.initialize();
            this.renderBoard(controller.playerOne.gameBoard.grid, attackFunctionOnOne, DOMBoardOne, controller, controller.playerOne.type);
            this.renderBoard(controller.playerTwo.gameBoard.grid, attackFunctionOnTwo, DOMBoardTwo, controller, controller.playerTwo.type);
            elements.gameOverDialog.close();
        });
    };
    
    renderBoard(attackFunction, DOMBoard) {
        // Populates the DOM grid cells with ships.
    
        for (let x = 0; x < 10; x++) {
            const row = document.createElement('div');
            row.setAttribute('class', `row row-${x}`);
            
            for (let y = 0; y < 10; y++) {
                const col = document.createElement('div');
                col.setAttribute('class', `col col-${y}`);
                
                col.addEventListener('click', () => {
                    attackFunction([x, y]);
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