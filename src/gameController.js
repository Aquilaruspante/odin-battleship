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
        if (this.activePlayer === this.playerOne) {
            this.activePlayer = this.playerTwo;
        } else {
            this.activePlayer = this.playerOne;
        }
    }

    composeGameBoard() {
        for (let ship of this.playerOne.gameBoard.shipArray) {
            while (!ship.isPlaced) {
                const row = Math.floor(Math.random() * 9);
                const col = Math.floor(Math.random() * 9);
                const orientation = (Math.floor(Math.random() * 2) + 1) === 1 ? 'horizontal' : 'vertical'; 
                this.playerOne.gameBoard.place(ship, [row, col], orientation, ship.symbol)
            }      
        }

        for (let ship of this.playerTwo.gameBoard.shipArray) {
            while (!ship.isPlaced) {
                const row = Math.floor(Math.random() * 9);
                const col = Math.floor(Math.random() * 9);
                const orientation = (Math.floor(Math.random() * 2) + 1) === 1 ? 'horizontal' : 'vertical'; 
                this.playerTwo.gameBoard.place(ship, [row, col], orientation, ship.symbol)
            }
        }
    }

    attackOnPlayerTwo(coordinates) {
        console.log('attacking player 2')
        if (this.activePlayer === this.playerOne) this.playerTwo.gameBoard.receiveAttack(coordinates);
    }

    attackOnPlayerOne(coordinates) {
        console.log('attacking player one')
        if (this.activePlayer === this.playerTwo) this.playerOne.gameBoard.receiveAttack(coordinates);
    }
}