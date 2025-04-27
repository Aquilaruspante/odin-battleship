import Ship from '../models/ship.js';

export default class GameBoard {
    constructor() {
        this.resetBoard();
        this.destroyer = new Ship(2, 'D');
        this.cruiser = new Ship(3, 'C');
        this.submarine = new Ship(3, 'S');
        this.battleship = new Ship(4, 'B');
        this.carrier = new Ship(5, 'A');

        this.shipArray = [this.destroyer, this.cruiser, this.submarine, this.battleship, this.carrier];
    };

    #shipContainedHorizotally(ship, col) {
        if (col + ship.length >= 10){
            return false;
        } else {
            return true;
        };
    };

    #shipDoesNotOverlapOtherShipsHorizontally(ship, row, col) {
        for (let i = 0; i < ship.length; i++) {
            if (this.grid[row][col + i] !== null) {
                return false
            }; 
        } ;
        return true;
    };

    #shipContainedVertically(ship, row) {
        if (row + ship.length >= 10) {
            return false;
        } else {
            return true;
        };
    };

    #shipDoesNotOverlapOthersShipsVertically(ship, row, col) {
        for (let i = 0; i < ship.length; i++) {
            if (this.grid[row + i][col] !== null) {
                return false
            }; 
        };
        return true;
    };

    #shipIsPlaceableHorizontally(ship, row , col) {
       if (this.#shipContainedHorizotally(ship, col) && this.#shipDoesNotOverlapOtherShipsHorizontally(ship, row, col)) {
        return true;
       } else {
        return false;
       };
    };

    #shipIsPlaceablevertically(ship, row , col) {
        if (this.#shipContainedVertically(ship, row) && this.#shipDoesNotOverlapOthersShipsVertically(ship, row, col)) {
            return true;
        } else {
            return false;
        };
    };
    
    place(ship, coordinates, orientation) {
        const [row, col] = coordinates;

        if (row > 10 || col > 10) throw new Error('coordinates must be 2 numbers less than 10');

        if (orientation === 'horizontal' && this.#shipIsPlaceableHorizontally(ship, row, col)) {
            for (let i = 0; i < ship.length; i++) {
                this.grid[row][col + i] = ship.symbol;
            };        
            ship.isPlaced = true;
        } else if (orientation === 'vertical' && this.#shipIsPlaceablevertically(ship, row, col)) {      
            for (let i = 0; i < ship.length; i++) {    
                this.grid[row + i][col] = ship.symbol;
            };
            
            ship.isPlaced = true;
        } else {
            ship.isPlaced = false;
        };
        
    };

    receiveAttack(coordinates) {
        const [row, col] = coordinates;

        if (row >= 10 || col >= 10) throw new Error('receiveAttack coordinates must be less than 10!');

        if (this.grid[row][col] === 'X' || this.grid[row][col] === 'M') {
            return { result: 'alreadyHit', coordinates: [row, col] };
        } else if (this.grid[row][col] === null) {
            this.grid[row][col] = 'M'; 
            return { result: 'miss', coordinates: [row, col] };
        } else {
            this.grid[row][col] = 'X'; 
            return { result: 'hit', coordinates: [row, col] };
        }
    };

    allShipsSunk() {
        if (this.destroyer.isSunk() && this.cruiser.isSunk() && this.submarine.isSunk() && this.battleship.isSunk() && this.carrier.isSunk()) {
            return true;
        } else {
            return false;
        };
    };

    resetBoard() {
        this.grid = [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
        ];
    };
};