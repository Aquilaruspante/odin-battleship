import GameController from './gameController.js';
import './styles.css';
import { renderBoard, managePlayAgainButton } from './views/DOMManager.js';
import { elements, initDOMElements } from './views/DOMElements.js';

export let gameController;

export let renderBoardOne;
export let renderBoardTwo;

window.onload = (event) => {
    initDOMElements();

    gameController = new GameController();

    gameController.initialize();

    const gameBoardOne = gameController.playerOne.gameBoard.grid;
    const gameBoardTwo = gameController.playerTwo.gameBoard.grid;

    const attackFunctionOnOne = gameController.attackOnPlayerOne.bind(gameController);
    const attackFunctionOnTwo = gameController.attackOnPlayerTwo.bind(gameController);

    renderBoardOne = (() => {renderBoard(gameBoardOne, attackFunctionOnOne, elements.boardOne, gameController, gameController.playerOne)});
    renderBoardTwo = (() => {renderBoard(gameBoardTwo, attackFunctionOnTwo, elements.boardTwo, gameController, gameController.playerTwo)});

    renderBoardOne();
    renderBoardTwo();

    document.querySelectorAll('.col').forEach(col => col.dispatchEvent(new Event('initBoard')));

    managePlayAgainButton(attackFunctionOnOne, attackFunctionOnTwo, elements.boardOne, elements.boardTwo, gameController);     // sets listener for play-again-button
};