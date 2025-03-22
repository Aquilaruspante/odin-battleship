import GameBoard from './gameBoard';
import Ship from './ship';

let gameBoard;

describe('gameBoard.grid to be a 10x10 array', () => {
    beforeEach(() => {
        gameBoard = new GameBoard();
    })

    test('grid to have 10 columns', () => {
        expect(gameBoard.grid).toHaveLength(10);
    })

    test('every column to have 10 rows', () => {
        for (let row of gameBoard.grid) {
            expect(row).toHaveLength(10);
        }
    })
})

describe('place method', () => {
    beforeEach(() => {
        gameBoard = new GameBoard();
    })

    test('place cruiser at (3, 1) horizontally occupies (3, 1), (3, 2), (3, 3)', () => {
        const cruiser = new Ship(3);

        gameBoard.place(cruiser, [3, 1], 'horizontal', 'C');
        expect(gameBoard.grid[3][1]).toBe('C');
        expect(gameBoard.grid[3][2]).toBe('C');
        expect(gameBoard.grid[3][3]).toBe('C');
    })

    test('place battleship at (3, 1) horizontally occupies (3, 1), (3, 2), (3, 3), (3, 4)', () => {
        const battleship = new Ship(4);

        gameBoard.place(battleship, [3, 1], 'horizontal', 'B');
        expect(gameBoard.grid[3][1]).toBe('B');
        expect(gameBoard.grid[3][2]).toBe('B');
        expect(gameBoard.grid[3][3]).toBe('B');
        expect(gameBoard.grid[3][4]).toBe('B');
    })

    test('place destroyer at (3, 1) horizontally occupies (3, 1), (3, 2),', () => {
        const destroyer = new Ship(2);

        gameBoard.place(destroyer, [3, 1], 'horizontal', 'D');
        expect(gameBoard.grid[3][1]).toBe('D');
        expect(gameBoard.grid[3][2]).toBe('D');
    })

    test('place cruiser at (3, 1) vertically occupies (3, 1), (4, 1), (5, 1)', () => {
        const cruiser = new Ship(3);

        gameBoard.place(cruiser, [3, 1], 'vertical', 'C');
        expect(gameBoard.grid[3][1]).toBe('C');
        expect(gameBoard.grid[4][1]).toBe('C');
        expect(gameBoard.grid[5][1]).toBe('C');
    })

    test('place battleship at (3, 1) vertically occupies (3, 1), (4, 1), (5, 1), (6, 1)', () => {
        const battleship = new Ship(4);

        gameBoard.place(battleship, [3, 1], 'vertical', 'B');
        expect(gameBoard.grid[3][1]).toBe('B');
        expect(gameBoard.grid[4][1]).toBe('B');
        expect(gameBoard.grid[5][1]).toBe('B');
        expect(gameBoard.grid[6][1]).toBe('B');
    })

    test('place destroyer at (3, 1) vertically occupies (3, 1), (4, 1),', () => {
        const destroyer = new Ship(2);

        gameBoard.place(destroyer, [3, 1], 'vertical', 'D');
        expect(gameBoard.grid[3][1]).toBe('D');
        expect(gameBoard.grid[4][1]).toBe('D');
    })

    test('coordinates higher than 10 throw error', () => {
        const destroyer = new Ship(2);

        expect(() => gameBoard.place(destroyer, [11, 8], 'horizontal', 'D')).toThrow('coordinates must be 2 numbers less than 10');
        expect(() => gameBoard.place(destroyer, [11, 15], 'horizontal', 'D')).toThrow('coordinates must be 2 numbers less than 10');
        expect(() => gameBoard.place(destroyer, [6, 15], 'horizontal', 'D')).toThrow('coordinates must be 2 numbers less than 10');
    })
})