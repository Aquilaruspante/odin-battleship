import GameController from "./gameController.js";
import { gameOverDialog, winnerAnnounce, playAgainButton, turnBoardActivePlayer } from "./index.js";

export function updateTurnBoard(controller) {
    turnBoardActivePlayer.innerText = controller.activePlayer.name;
}

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
export function renderBoard(board, attackFunction, DOMBoard, controller, type) {
    // Populates the DOM grid cells with ships.

    for (let x = 0; x < 10; x++) {
        const row = document.createElement('div');
        row.setAttribute('class', `row row-${x}`);
        
        for (let y = 0; y < 10; y++) {
            const col = document.createElement('div');
            col.setAttribute('class', `col col-${y}`);
            
            if (board[x][y] !== null && type === 'human') col.innerText = board[x][y];
            col.addEventListener('click', () => {
                attackFunction(controller, [x, y], col);
            })
            row.appendChild(col);
        }
        DOMBoard.appendChild(row);
    };
};

export function renderGameOverDialog(winner) {
    winnerAnnounce.innerText = `${winner.name} won!!!`;
    gameOverDialog.showModal();
};