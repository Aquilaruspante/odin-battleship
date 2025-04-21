import GameController from "./gameController.js";

const gameOverDialog = document.querySelector('#game-over-dialog');
const winnerAnnounce = document.querySelector('#announce-winner');
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
                console.log(controller.activePlayer);
            })
            row.appendChild(col);
        }
        DOMBoard.appendChild(row);
    };
};

export function renderGameOverDialog(winner) {
    winnerAnnounce.innerText = `${winner} won!!!`;
    gameOverDialog.showModal();
};