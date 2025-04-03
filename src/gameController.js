import Player from "./player.js";

export default class GameController {
    constructor () {
        this.playerOne = new Player('human');
        this.playerTwo = new Player('computer');
    }

    #randomizeInitialPlayer() {
        const random = Math.floor(Math.random() * 2) + 1;

        if (random === 1) {
            this.activePlayer = this.playerOne;
        } else {
            this.activePlayer = this.playerTwo;
        }
    }

    #resetShipsHits() {
        for (let ship of this.playerOne.gameBoard.shipArray) {
            ship.hitsNumber = 0;
            ship.isPlaced = false;
        }

        for (let ship of this.playerTwo.gameBoard.shipArray) {
            ship.hitsNumber = 0;
            ship.isPlaced = false;
        }
    }

    initialize() {
        this.#randomizeInitialPlayer();
        this.#resetShipsHits();
    }

    switchPlayer() {
        console.log('here');
        if (this.activePlayer === this.playerOne) {
            this.activePlayer = this.playerTwo;
        } else {
            this.activePlayer = this.playerOne;
        }
    }

    composeGameBoard() {
        for (let ship of this.playerOne.gameBoard.shipArray) {
            while (!ship.isPlaced) {
                const row = Math.floor(Math.random() * 10);
                const col = Math.floor(Math.random() * 10);
                const orientation = (Math.floor(Math.random() * 2) + 1) === 1 ? 'horizontal' : 'vertical'; 
                this.playerOne.gameBoard.place(ship, [row, col], orientation)
            }      
        }

        for (let ship of this.playerTwo.gameBoard.shipArray) {
            while (!ship.isPlaced) {
                const row = Math.floor(Math.random() * 10);
                const col = Math.floor(Math.random() * 10);
                const orientation = (Math.floor(Math.random() * 2) + 1) === 1 ? 'horizontal' : 'vertical'; 
                this.playerTwo.gameBoard.place(ship, [row, col], orientation);
            }
        }
    }

    attackOnPlayerTwo(coordinates, cell) {
        if (this.activePlayer === this.playerOne) this.playerTwo.gameBoard.receiveAttack(coordinates, cell, this); 
    }

    attackOnPlayerOne(coordinates, cell) {
        if (this.activePlayer === this.playerTwo) this.playerOne.gameBoard.receiveAttack(coordinates, cell, this);
    }
}