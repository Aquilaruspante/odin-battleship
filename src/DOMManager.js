import GameController from "./gameController.js";
import { gameOverDialog, winnerAnnounce, playAgainButton, turnBoardActivePlayer, timeOutDialog, doNotLook, yourTurn, counter } from "./index.js";
import isModalityHumanVsHuman from "./switchModality.js";

export function renderTimeOut(controller) {
    timeOutDialog.showModal();
    doNotLook.innerText = controller.activePlayer === controller.playerOne ? `${controller.playerTwo.name} look away!` : `${controller.playerOne.name} look away!`;
    yourTurn.innerText = controller.activePlayer === controller.playerOne ? `${controller.playerOne.name} get ready!` : `${controller.playerTwo.name} get ready!`;
    let timeOutCounter = 5;
    counter.innerText = timeOutCounter;
    const interval = setInterval(() => {
        timeOutCounter--;
        counter.innerText = timeOutCounter;
        if (timeOutCounter === 0) {
            clearInterval(interval);
            setTimeout(() => {
                timeOutDialog.close();
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
        })
    } else {
        if (board[x][y] !== null && player.type === 'human') col.innerText = board[x][y];
    };
};

export function updateTurnBoard(controller) {
    turnBoardActivePlayer.innerText = controller.activePlayer.name;
};

export function managePlayAgainButton(attackFunctionOnOne, attackFunctionOnTwo, DOMBoardOne, DOMBoardTwo, controller) {
    playAgainButton.addEventListener('click', () => {
        DOMBoardOne.innerHTML = '';
        DOMBoardTwo.innerHTML = '';
        controller.initialize();
        renderBoard(controller.playerOne.gameBoard.grid, attackFunctionOnOne, DOMBoardOne, controller, controller.playerOne.type);
        renderBoard(controller.playerTwo.gameBoard.grid, attackFunctionOnTwo, DOMBoardTwo, controller, controller.playerTwo.type);
        gameOverDialog.close();
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
                attackFunction(controller, [x, y], col);
            });
            row.appendChild(col);
        }
        DOMBoard.appendChild(row);
    };
};

export function renderGameOverDialog(winner) {
    winnerAnnounce.innerText = `${winner.name} won!!!`;
    gameOverDialog.showModal();
};