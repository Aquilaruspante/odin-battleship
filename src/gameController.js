import Player from "./player.js";

export default class GameController {
    constructor () {
        this.playerOne = new Player('human');
        this.playerTwo = new Player('computer');
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

    checkWinner() {
        console.log('here');
        if (this.playerOne.gameBoard.allShipsSunk()) {
            this.playerTwo.isWinner = true;
        };

        if (this.playerTwo.gameBoard.allShipsSunk()) {
            this.playerOne.isWinner = true;
        };
    };

    initialize() {
        this.#randomizeInitialPlayer();
        this.#resetShipsHits();
    };

    switchPlayer() {
        if (this.activePlayer === this.playerOne) {
            this.activePlayer = this.playerTwo;
        } else {
            this.activePlayer = this.playerOne;
        };
    };

    composeGameBoard() {
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
        this.checkWinner(); 
        console.log('player one', this.playerOne.isWinner);
        console.log('player two', this.playerTwo.isWinner);
    };

    attackOnPlayerOne(controller, coordinates, cell) {
        if (controller.activePlayer === controller.playerTwo) controller.playerOne.gameBoard.receiveAttack(coordinates, cell, controller);
        this.checkWinner();
    };
};