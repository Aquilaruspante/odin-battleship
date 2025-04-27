import Player from "../models/player.js";
import { renderGameOverDialog, updateTurnBoard, renderTimeOut, renderBoard, managePlayAgainButton } from "../views/DOMManager.js";
import { elements } from "../views/DOMElements.js";
import busEvent from "../utils/eventBus.js";

export default class GameController {
    constructor (modality, playerOneName='Player One', playertwoName='Player Two') {
        this.playerOne = new Player('human', playerOneName);
        this.playerTwo = new Player(modality, playertwoName);
    };

    renderBoardOne() {
        renderBoard(this.playerOne.gameBoard.grid, this.attackOnPlayerOne.bind(this), elements.boardOne, this, this.playerOne);
    };
    
    renderBoardTwo() {
        renderBoard(this.playerTwo.gameBoard.grid, this.attackOnPlayerTwo.bind(this), elements.boardTwo, this, this.playerTwo);
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
        this.renderBoardOne();
        this.renderBoardTwo();
        managePlayAgainButton(this.attackOnPlayerOne, this.attackOnPlayerTwo, elements.boardOne, elements.boardTwo, this); 
    };

    switchPlayer() {
        this.activePlayer = (this.activePlayer === this.playerOne) ? this.playerTwo : this.playerOne;
    
        renderTimeOut(this);
        updateTurnBoard(this);
    
        document.querySelectorAll('.col').forEach(col => col.dispatchEvent(new Event('switchPlayer')));
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
    };

    attackOnPlayerTwo(coordinates) {
        if (this.activePlayer === this.playerOne) {
            const receiver = this.playerTwo;
            const { result, coordinates: attackedCoordinates } = this.playerTwo.gameBoard.receiveAttack(coordinates);
    
            busEvent.dispatchEvent(new CustomEvent('attackResult', {
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
            const receiver = this.playerOne;
            const { result, coordinates: attackedCoordinates } = this.playerOne.gameBoard.receiveAttack(coordinates);
    
            busEvent.dispatchEvent(new CustomEvent('attackResult', {
                detail: { receiver, result, coordinates: attackedCoordinates }
            }));
    
            if (result === 'miss' || result === 'alreadyHit') {
                this.switchPlayer();
            };
        };        
        
        this.#checkWinner();
    };
};

busEvent.addEventListener('attackResult', (e) => {
    console.log(e.detail);
})