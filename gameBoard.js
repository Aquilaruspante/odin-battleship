import Ship from './ship';

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

        this.destroyer = new Ship(2);
        this.cruiser = new Ship(3);
        this.submarine = new Ship(3);
        this.battleship = new Ship(4);
        this.carrier = new Ship(5);
    }

    place(ship, coordinates, orientation, symbol) {
        const [row, col] = coordinates;

        if (row > 10 || col > 10) throw new Error ('coordinates must be 2 numbers less than 10')

        if (orientation === 'horizontal') {
            for (let i = 0; i < ship.length; i++) {
                this.grid[row][col + i] = symbol;
            }
        } else if (orientation === 'vertical') {
            for (let i = 0; i < ship.length; i++) {
                this.grid[row + i][col] = symbol;
            }
        }
    }

    receiveAttack(coordinates) {
        const [row, col] = coordinates;

        if (row > 10 || col > 10) throw new Error('receiveAttack coordinates must be less than 10!');

        switch (this.grid[row][col]) {
            case 'D':
                this.destroyer.hit();
                break;
            case 'C':
                this.cruiser.hit();
                break;
            case 'S':
                this.submarine.hit();
                nreak;
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