import GameController from './gameController.js';
import './styles.css';
import { renderBoard } from './DOMManager.js';

window.onload = (event) => {
    const boardOne = document.querySelector('.gameboard-1');
    const boardTwo = document.querySelector('.gameboard-2');       
    
    const gameController = new GameController();

    const gameBoardOne = gameController.playerOne.gameBoard.grid;
    const gameBoardTwo = gameController.playerTwo.gameBoard.grid;

    gameController.initialize();
    gameController.composeGameBoard();

    const attackFunctionOnOne = gameController.attackOnPlayerOne.bind(gameController);
    const attackFunctionOnTwo = gameController.attackOnPlayerTwo.bind(gameController);

    renderBoard(gameBoardOne, attackFunctionOnOne, boardOne, gameController);
    renderBoard(gameBoardTwo, attackFunctionOnTwo, boardTwo, gameController);
}