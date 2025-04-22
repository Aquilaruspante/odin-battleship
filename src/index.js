import GameController from './gameController.js';
import './styles.css';
import { renderBoard, managePlayAgainButton } from './DOMManager.js';

window.onload = (event) => {
    const boardOne = document.querySelector('.gameboard-1');
    const boardTwo = document.querySelector('.gameboard-2');       
    
    const gameController = new GameController();

    gameController.initialize();

    const gameBoardOne = gameController.playerOne.gameBoard.grid;
    const gameBoardTwo = gameController.playerTwo.gameBoard.grid;

    const attackFunctionOnOne = gameController.attackOnPlayerOne.bind(gameController);
    const attackFunctionOnTwo = gameController.attackOnPlayerTwo.bind(gameController);

    renderBoard(gameBoardOne, attackFunctionOnOne, boardOne, gameController);
    renderBoard(gameBoardTwo, attackFunctionOnTwo, boardTwo, gameController);

    managePlayAgainButton(attackFunctionOnOne, boardOne, boardTwo, gameController);     // sets listener for play-again-button
};