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
}