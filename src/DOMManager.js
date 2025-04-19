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
