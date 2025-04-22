import GameController from "./gameController.js";

const gameOverDialog = document.querySelector('#game-over-dialog');
const winnerAnnounce = document.querySelector('#announce-winner');

const playAgainButton = document.querySelector('#play-again-button');

const main = document.querySelector('main');

export function managePlayAgainButton(attackFunctionOnOne, attackFunctionOnTwo, DOMBoardOne, DOMBoardTwo, controller) {
    playAgainButton.addEventListener('click', () => {
        DOMBoardOne.innerHTML = '';
        DOMBoardTwo.innerHTML = '';
        controller.initialize();
        renderBoard(controller.playerOne.gameBoard.grid, attackFunctionOnOne, DOMBoardOne, controller);
        renderBoard(controller.playerTwo.gameBoard.grid, attackFunctionOnTwo, DOMBoardTwo, controller);
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
export function renderBoard(board, attackFunction, DOMBoard, controller) {
    for (let x = 0; x < 10; x++) {
        const row = document.createElement('div');
        row.setAttribute('class', `row row-${x}`);
        
        for (let y = 0; y < 10; y++) {
            const col = document.createElement('div');
            col.setAttribute('class', `col col-${y}`);
            
            if (board[x][y] !== null) col.innerText = board[x][y];
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