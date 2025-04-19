import GameController from './gameController.js';
import './styles.css';
import { renderBoard } from './DOMManager.js';

const gameController = new GameController();

const gameBoardOne = gameController.playerOne.gameBoard.grid;
const gameBoardTwo = gameController.playerTwo.gameBoard.grid;

window.onload = (event) => {
    const boardOne = document.querySelector('.gameboard-1');
    const boardTwo = document.querySelector('.gameboard-2');        

    gameController.initialize();
    gameController.composeGameBoard();

    renderBoard(gameBoardOne, gameController.attackOnPlayerOne, boardOne, gameController);
    renderBoard(gameBoardTwo, gameController.attackOnPlayerTwo, boardTwo, gameController);
}