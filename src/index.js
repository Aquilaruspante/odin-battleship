import GameController from './gameController.js';
import './styles.css';

const gameController = new GameController();

const gameBoardOne = gameController.playerOne.gameBoard.grid;
const gameboardtwo = gameController.playerTwo.gameBoard.grid;

window.onload = (event) => {
    const boardOne = document.querySelector('.gameboard-1');
    const boardTwo = document.querySelector('.gameboard-2');        

    gameController.initialize();
    gameController.composeGameBoard();

    for (let x = 0; x < 10; x++) {
        const row = document.createElement('div');
        row.setAttribute('class', `row row-${x}`);
        
        for (let y = 0; y < 10; y++) {
            const col = document.createElement('div');
            col.setAttribute('class', `col col-${y}`);
            
            if (gameBoardOne[x][y] !== null) col.innerText = gameBoardOne[x][y];
            col.addEventListener('click', () => {
                gameController.attackOnPlayerOne([x, y], col);
            })
            row.appendChild(col);
        }
        boardOne.appendChild(row);
    }


    for (let x = 0; x < 10; x++) {
        const row = document.createElement('div');
        row.setAttribute('class', `row row-${x}`);
        
        for (let y = 0; y < 10; y++) {
            const col = document.createElement('div');
            col.setAttribute('class', `col col-${y}`);
            col.addEventListener('click', () => {
                gameController.attackOnPlayerTwo([x, y], col);
            })
            row.appendChild(col);
        }
        boardTwo.appendChild(row);
    }
}