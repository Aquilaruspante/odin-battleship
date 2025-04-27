import GameController from "../controllers/gameController.js";
import { elements } from './DOMElements.js';
import isModalityHumanVsHuman from "../utils/switchModality.js";
import eventBus from "../utils/eventBus.js";

export let controller;

export function renderHit(receiver, result, coordinates) {
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

export function showInitialDialog() {
    elements.initialDialog.showModal();
};

export function initGame() {
    elements.startGameButton.addEventListener('click', () => {
        startGame();
        elements.initialDialog.close();
    });
};

export function startGame() {
    const modality = elements.selectModality.value;
    const playerOneName = elements.choosePlayerOneName.value;
    const playerTwoName = elements.choosePlayerTwoName.value;

    controller = new GameController(modality, playerOneName, playerTwoName);
    controller.initialize();
};

export function renderTimeOut(controller) {
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

function addEvent(col, event, controller, player, board, x, y) {
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

export function updateTurnBoard(controller) {
    elements.turnBoardActivePlayer.innerText = controller.activePlayer.name;
};

export function managePlayAgainButton(attackFunctionOnOne, attackFunctionOnTwo, DOMBoardOne, DOMBoardTwo, controller) {
    elements.playAgainButton.addEventListener('click', () => {
        DOMBoardOne.innerHTML = '';
        DOMBoardTwo.innerHTML = '';
        controller.initialize();
        renderBoard(controller.playerOne.gameBoard.grid, attackFunctionOnOne, DOMBoardOne, controller, controller.playerOne.type);
        renderBoard(controller.playerTwo.gameBoard.grid, attackFunctionOnTwo, DOMBoardTwo, controller, controller.playerTwo.type);
        elements.gameOverDialog.close();
    });
};

/**
 * 
 * @param {Array<Array<String|null>>} board 
 * @param {(controller: GameController, coordinates: [number, number], cell: HTMLElement) => void} attackFunction 
 * @param {HTMLElement} DOMBoard 
 * @param {GameController} controller 
 */
export function renderBoard(board, attackFunction, DOMBoard, controller, player) {
    // Populates the DOM grid cells with ships.

    for (let x = 0; x < 10; x++) {
        const row = document.createElement('div');
        row.setAttribute('class', `row row-${x}`);
        
        for (let y = 0; y < 10; y++) {
            const col = document.createElement('div');
            col.setAttribute('class', `col col-${y}`);

            addEvent(col, 'switchPlayer', controller,player, board, x, y);
            addEvent(col, 'initBoard', controller, player, board, x, y);
            
            col.addEventListener('click', () => {
                attackFunction([x, y]);
            });
            row.appendChild(col);
        }
        DOMBoard.appendChild(row);
    };
};

export function renderGameOverDialog(winner) {
    elements.winnerAnnounce.innerText = `${winner.name} won!!!`;
    elements.gameOverDialog.showModal();
};