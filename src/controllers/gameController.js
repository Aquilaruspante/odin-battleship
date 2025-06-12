import Player from "../models/player.js";
import eventBus from "../utils/eventBus.js";
import isModalityHumanVsHuman from "../utils/switchModality.js";
import AIController from "./aiController.js";
import { dispatchGridComposed } from "./eventListeners.js";

export default class GameController {
    constructor (modality, playerOneName='Player One', playertwoName='Player Two') {
        this.playerOne = new Player('human', playerOneName);
        this.playerTwo = new Player(modality, playertwoName);
        this.aiController = modality === 'computer' ? new AIController(this) : null;
    };

    #randomizeInitialPlayer() {
        const random = Math.floor(Math.random() * 2) + 1;

        if (random === 1) {
            this.activePlayer = this.playerOne;
        } else {
            this.activePlayer = this.playerTwo;
        };
        console.debug('Initial player randomized');
    };

    #resetShipsHitsAndPlacement() {
        for (let ship of this.playerOne.gameBoard.shipArray) {
            ship.hitsNumber = 0;
            ship.isPlaced = false;
        };

        for (let ship of this.playerTwo.gameBoard.shipArray) {
            ship.hitsNumber = 0;
            ship.isPlaced = false;
        };
        console.debug('ships reset');
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
        this.#resetShipsHitsAndPlacement();
        this.playerOne.gameBoard.resetBoard();
        this.playerTwo.gameBoard.resetBoard();

        dispatchGridComposed(this);

        console.debug('both boards reset');
        this.placingTurn = this.playerOne;
        eventBus.dispatchEvent(new Event('shipsReadyForPlacement'));
    };

    startGame() {
        this.#randomizeInitialPlayer();
        eventBus.dispatchEvent(new Event('startGame'));
        if (!isModalityHumanVsHuman(this) && this.activePlayer === this.playerTwo) {
            setTimeout(() => {
                this.aiController.attack();
            }, 800);
        };
        console.debug('start game event fired');
    };

    switchPlayer() {
        this.activePlayer = (this.activePlayer === this.playerOne) ? this.playerTwo : this.playerOne;
        eventBus.dispatchEvent(new CustomEvent('switchPlayer', { detail: { activePlayer: this.activePlayer }}));
    }
    

    composeGameBoard(player) {
        for (let ship of player.gameBoard.shipArray) {
            while (!ship.isPlaced) {
                const row = Math.floor(Math.random() * 10);
                const col = Math.floor(Math.random() * 10);
                const orientation = (Math.floor(Math.random() * 2) + 1) === 1 ? 'horizontal' : 'vertical'; 
                player.gameBoard.place(ship, [row, col], orientation)
            };      
        };

        dispatchGridComposed(this);

        const placingPlayer = player === this.playerOne ? 'playerOne' : 'playerTwo';

        eventBus.dispatchEvent(new CustomEvent('initBoard', { detail: { placingPlayer }}));
        console.debug('board composed for', player.name);
    };

    attackOnPlayerTwo(coordinates) {
        if (this.activePlayer === this.playerOne) {
            const receiver = 'playerTwo';
            const { result, coordinates: attackedCoordinates } = this.playerTwo.gameBoard.receiveAttack(coordinates);
    
            eventBus.dispatchEvent(new CustomEvent('attackResult', {
                detail: { receiver, result, coordinates: attackedCoordinates }
            }));
    
            if (result === 'miss') {
                this.switchPlayer();
            };
        };
        this.#checkWinner(); 
    };

    attackOnPlayerOne(coordinates, path = null) {
        if (this.activePlayer === this.playerTwo) {
            const receiver = 'playerOne';
            const { result, coordinates: attackedCoordinates } = this.playerOne.gameBoard.receiveAttack(coordinates);
    
            eventBus.dispatchEvent(new CustomEvent('attackResult', {
                detail: { receiver, result, coordinates: attackedCoordinates }
            }));
    
            if (result === 'miss') {
                this.switchPlayer();
            } else if (!isModalityHumanVsHuman(this) && this.activePlayer === this.playerTwo) {
                if (result === 'hit') {
                    setTimeout(() => {
                        this.aiController.attack();
                    }, 800);
                } else if (result === 'alreadyHit') {
                    this.aiController.attack();
                };
            };
        };        
        this.#checkWinner();
    };
};