import GameController from './controllers/gameController.js';
import './styles.css';
import { renderBoard, managePlayAgainButton } from './views/DOMManager.js';
import { elements, initDOMElements } from './views/DOMElements.js';

export let gameController;

window.onload = (event) => {
    initDOMElements();

    gameController = new GameController();

    gameController.initialize();

    function renderBoardOne() {
        renderBoard(gameController.playerOne.gameBoard.grid, gameController.attackOnPlayerOne.bind(gameController), elements.boardOne, gameController, gameController.playerOne);
    };
    
    function renderBoardTwo() {
        renderBoard(gameController.playerTwo.gameBoard.grid, gameController.attackOnPlayerTwo.bind(gameController), elements.boardTwo, gameController, gameController.playerTwo);
    };

    renderBoardOne();
    renderBoardTwo();

    document.querySelectorAll('.col').forEach(col => col.dispatchEvent(new Event('initBoard')));

    managePlayAgainButton(gameController.attackOnPlayerOne, gameController.attackOnPlayerTwo, elements.boardOne, elements.boardTwo, gameController);     // sets listener for play-again-button
};