import Player from "./player";

export default class GameController {
    constructor () {
        this.playerOne = new Player('human');
        this.playerTwo = new Player('computer');
    }

    initialize() {
        const random = Math.floor(Math.random() * 2) + 1;

        if (random === 1) {
            this.activePlayer = this.playerOne;
        } else {
            this.activePlayer = this.playerTwo;
        }
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