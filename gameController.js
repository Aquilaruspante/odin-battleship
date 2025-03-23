import Player from "./player";

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
        }

        for (let ship of this.playerTwo.gameBoard.shipArray) {
            ship.hitsNumber = 0;
        }
    }

    initialize() {
        this.#randomizeInitialPlayer();
        this.#resetShipsHits();
    }

    attack(coordinates) {
        if (this.activePlayer === this.playerOne) {
            this.playerTwo.gameBoard.receiveAttack(coordinates);
        } else if (this.activePlayer === this.playerTwo) {
            this.playerOne.gameBoard.receiveAttack(coordinates);
        }
    }

    switchPlayer() {
        if (this.activePlayer === this.playerOne) {
            this.activePlayer = this.playerTwo;
        } else {
            this.activePlayer = this.playerOne;
        }
    }
}