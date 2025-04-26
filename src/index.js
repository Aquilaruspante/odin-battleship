import GameController from './gameController.js';
import './styles.css';
import { renderBoard, managePlayAgainButton } from './DOMManager.js';

export let gameOverDialog;
export let winnerAnnounce;
export let playAgainButton;
export let turnBoardActivePlayer;

export let renderBoardOne;
export let renderBoardTwo;

export let gameController;

export let boardOne;
export let boardTwo;

window.onload = (event) => {
    gameOverDialog = document.querySelector('#game-over-dialog');
    winnerAnnounce = document.querySelector('#announce-winner');

    playAgainButton = document.querySelector('#play-again-button');

    turnBoardActivePlayer = document.querySelector('#turn-board p');

    boardOne = document.querySelector('.gameboard-1');
    boardTwo = document.querySelector('.gameboard-2');       
    
    gameController = new GameController();

    gameController.initialize();

    const gameBoardOne = gameController.playerOne.gameBoard.grid;
    const gameBoardTwo = gameController.playerTwo.gameBoard.grid;

    const attackFunctionOnOne = gameController.attackOnPlayerOne.bind(gameController);
    const attackFunctionOnTwo = gameController.attackOnPlayerTwo.bind(gameController);

    renderBoardOne = (() => {renderBoard(gameBoardOne, attackFunctionOnOne, boardOne, gameController, gameController.playerOne)});
    renderBoardTwo = (() => {renderBoard(gameBoardTwo, attackFunctionOnTwo, boardTwo, gameController, gameController.playerTwo)});

    renderBoardOne();
    renderBoardTwo();

    document.querySelectorAll('.col').forEach(col => col.dispatchEvent(new Event('initBoard')));

    managePlayAgainButton(attackFunctionOnOne, attackFunctionOnTwo, boardOne, boardTwo, gameController);     // sets listener for play-again-button
};