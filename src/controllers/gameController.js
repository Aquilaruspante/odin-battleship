import Player from "../models/player.js";
import eventBus from "../utils/eventBus.js";

export default class GameController {
    constructor (modality, playerOneName='Player One', playertwoName='Player Two') {
        this.playerOne = new Player('human', playerOneName);
        this.playerTwo = new Player(modality, playertwoName);
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
            eventBus.dispatchEvent(new CustomEvent('gameOver', { detail: { winner: this.playerTwo }}));
        };

        if (this.playerTwo.gameBoard.allShipsSunk()) {
            eventBus.dispatchEvent(new CustomEvent('gameOver', { detail: { winner: this.playerOne }}));
        };
    };

    initialize() {
        this.#randomizeInitialPlayer();
        this.#resetShipsHits();
        this.playerOne.gameBoard.resetBoard();
        this.playerTwo.gameBoard.resetBoard();
        this.#composeGameBoard();
    };

    switchPlayer() {
        this.activePlayer = (this.activePlayer === this.playerOne) ? this.playerTwo : this.playerOne;
        eventBus.dispatchEvent(new CustomEvent('switchPlayer', { detail: { activePlayer: this.activePlayer }}));
    }
    

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

        eventBus.dispatchEvent(new CustomEvent('gridComposed', { 
            detail: {
                gridOne: this.playerOne.gameBoard.grid,
                gridTwo: this.playerTwo.gameBoard.grid,
            }
        }));
        eventBus.dispatchEvent(new CustomEvent('initBoard', { detail: { activePlayer: this.activePlayer }}));
    };

    attackOnPlayerTwo(coordinates) {
        if (this.activePlayer === this.playerOne) {
            const receiver = 'playerTwo';
            const { result, coordinates: attackedCoordinates } = this.playerTwo.gameBoard.receiveAttack(coordinates);
    
            eventBus.dispatchEvent(new CustomEvent('attackResult', {
                detail: { receiver, result, coordinates: attackedCoordinates }
            }));
    
            if (result === 'miss' || result === 'alreadyHit') {
                this.switchPlayer();
            };
        };

        this.#checkWinner(); 
    };

    attackOnPlayerOne(coordinates) {
        if (this.activePlayer === this.playerTwo) {
            const receiver = 'playerOne';
            const { result, coordinates: attackedCoordinates } = this.playerOne.gameBoard.receiveAttack(coordinates);
    
            eventBus.dispatchEvent(new CustomEvent('attackResult', {
                detail: { receiver, result, coordinates: attackedCoordinates }
            }));
    
            if (result === 'miss' || result === 'alreadyHit') {
                this.switchPlayer();
            };
        };        
        
        this.#checkWinner();
    };
};