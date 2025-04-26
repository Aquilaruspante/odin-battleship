import Player from "./player.js";
import { renderGameOverDialog, updateTurnBoard, renderTimeOut } from "./views/DOMManager.js";

export default class GameController {
    constructor () {
        this.playerOne = new Player('human', 'Player One');
        this.playerTwo = new Player('human', 'Player Two');
    };

    #randomizeInitialPlayer() {
        const random = Math.floor(Math.random() * 2) + 1;

        if (random === 1) {
            this.activePlayer = this.playerOne;
        } else {
            this.activePlayer = this.playerTwo;
        };
    };

    #resetShipsHits() {
        for (let ship of this.playerOne.gameBoard.shipArray) {
            ship.hitsNumber = 0;
            ship.isPlaced = false;
        };

        for (let ship of this.playerTwo.gameBoard.shipArray) {
            ship.hitsNumber = 0;
            ship.isPlaced = false;
        };
    };

    #checkWinner() {
        if (this.playerOne.gameBoard.allShipsSunk()) {
            renderGameOverDialog(this.playerTwo);
        };

        if (this.playerTwo.gameBoard.allShipsSunk()) {
            renderGameOverDialog(this.playerOne);
        };
    };

    initialize() {
        this.#randomizeInitialPlayer();
        this.#resetShipsHits();
        this.playerOne.gameBoard.resetBoard();
        this.playerTwo.gameBoard.resetBoard();
        this.#composeGameBoard();
        updateTurnBoard(this);
        renderTimeOut(this);
    };

    async switchPlayer() {
        if (this.activePlayer === this.playerOne) {
            this.activePlayer = this.playerTwo;
        } else {
            this.activePlayer = this.playerOne;
        };
        await setTimeout(() => {
            return;
        }, 500);
        renderTimeOut(this);
        updateTurnBoard(this);
    };

    #composeGameBoard() {
        for (let ship of this.playerOne.gameBoard.shipArray) {
            while (!ship.isPlaced) {
                const row = Math.floor(Math.random() * 10);
                const col = Math.floor(Math.random() * 10);
                const orientation = (Math.floor(Math.random() * 2) + 1) === 1 ? 'horizontal' : 'vertical'; 
                this.playerOne.gameBoard.place(ship, [row, col], orientation)
            };      
        };

        for (let ship of this.playerTwo.gameBoard.shipArray) {
            while (!ship.isPlaced) {
                const row = Math.floor(Math.random() * 10);
                const col = Math.floor(Math.random() * 10);
                const orientation = (Math.floor(Math.random() * 2) + 1) === 1 ? 'horizontal' : 'vertical'; 
                this.playerTwo.gameBoard.place(ship, [row, col], orientation);
            };
        };
    };

    attackOnPlayerTwo(controller, coordinates, cell) {
        if (controller.activePlayer === controller.playerOne) controller.playerTwo.gameBoard.receiveAttack(coordinates, cell, controller);
        this.#checkWinner(); 
    };

    attackOnPlayerOne(controller, coordinates, cell) {
        if (controller.activePlayer === controller.playerTwo) controller.playerOne.gameBoard.receiveAttack(coordinates, cell, controller);
        this.#checkWinner();
    };
};