import Ship from './ship.js';

export default class GameBoard {
    constructor() {
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
        ]

        this.destroyer = new Ship(2, 'D');
        this.cruiser = new Ship(3, 'C');
        this.submarine = new Ship(3, 'S');
        this.battleship = new Ship(4, 'B');
        this.carrier = new Ship(5, 'A');

        this.shipArray = [this.destroyer, this.cruiser, this.submarine, this.battleship, this.carrier];
    }

    place(ship, coordinates, orientation) {
        const [row, col] = coordinates;

        if (row > 10 || col > 10) throw new Error ('coordinates must be 2 numbers less than 10')

        if (orientation === 'horizontal') {
            if (col + ship.length >= 10) throw new Error('ship not contained inside the board');

            for (let i = 0; i < ship.length; i++) {
                if (this.grid[row][col + i] === null) {
                    this.grid[row][col + i] = ship.symbol;
                } else {
                    throw new Error('Position already occupied');
                }
            }
            
            ship.isPlaced = true;
                
        } else if (orientation === 'vertical') {
            if (row + ship.length >= 10) throw new Error('ship not contained inside the board');
            
            for (let i = 0; i < ship.length; i++) {
                if (this.grid[row][col + i] === null) {
                    this.grid[row + i][col] = ship.symbol;
                } else {
                    throw new Error('Position already occupied');
                }
            }

            ship.isPlaced = true;
        }
    }

    receiveAttack(coordinates) {
        const [row, col] = coordinates;

        if (row >= 10 || col >= 10) throw new Error('receiveAttack coordinates must be less than 10!');

        switch (this.grid[row][col]) {
            case 'D':
                this.destroyer.hit();
                break;
            case 'C':
                this.cruiser.hit();
                break;
            case 'S':
                this.submarine.hit();
                break;
            case 'B':
                this.battleship.hit();
                break;
            case 'A':
                this.carrier.hit();
                break;
            case null:
                break;
        }

        this.grid[row][col] = 'X';
    }

    allShipsSunk() {
        if (this.destroyer.isSunk() && this.cruiser.isSunk() && this.submarine.isSunk() && this.battleship.isSunk() && this.carrier.isSunk()) {
            return true;
        } else {
            return false;
        }
    }
}