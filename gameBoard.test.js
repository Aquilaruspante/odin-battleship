import { beforeEach, expect, jest } from '@jest/globals';
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

    test('placing a ship on an occupied position throws an error', () => {
        const destroyer = new Ship(2);
        const cruiser = new Ship(3);
    
        gameBoard.place(destroyer, [4, 5], 'horizontal', 'D');
        expect(() => gameBoard.place(cruiser, [4, 5], 'horizontal', 'C'))
            .toThrow('Position already occupied');
    });
    
    test('placing a ship in a way it gets out of the border throws an error', () => {
        // horizontal placement.
        expect(() => gameBoard.place(gameBoard.destroyer, [1, 9], 'horizontal', 'D')).toThrow('ship not contained inside the board');

        // vetical placement.
        expect(() => gameBoard.place(gameBoard.carrier, [6, 1], 'vertical', 'A')).toThrow('ship not contained inside the board');
    })

    test('place method changes ship.isPlaced to true', () => {
        gameBoard.place(gameBoard.cruiser, [4, 4], 'horizontal', 'C');
        expect(gameBoard.cruiser.isPlaced).toBeTruthy();
    })
})

describe('ship instances are created correctly', () => {
    const gameBoard = new GameBoard()

    test('destroyer length = 2, hitNumbers = 0', () => {
        expect(gameBoard.destroyer.length).toBe(2);
        expect(gameBoard.destroyer.hitsNumber).toBe(0);
    })

    test('cruiser length = 3, hitNumbers = 0', () => {
        expect(gameBoard.cruiser.length).toBe(3);
        expect(gameBoard.cruiser.hitsNumber).toBe(0);
    })

    test('submarine length = 3, hitNumbers = 0', () => {
        expect(gameBoard.submarine.length).toBe(3);
        expect(gameBoard.submarine.hitsNumber).toBe(0);
    })

    test('battleship length = 4, hitNumbers = 0', () => {
        expect(gameBoard.battleship.length).toBe(4);
        expect(gameBoard.battleship.hitsNumber).toBe(0);
    })

    test('carrier length = 5, hitNumbers = 0', () => {
        expect(gameBoard.carrier.length).toBe(5);
        expect(gameBoard.carrier.hitsNumber).toBe(0);
    })
})

describe('receiveAttack method', () => {
    beforeEach(() => {
        gameBoard = new GameBoard();
        gameBoard.place(gameBoard.destroyer, [4, 6], 'horizontal', 'D');
        gameBoard.destroyer.hit = jest.fn();
    })

    test('grid location has value "X" after hit and hit not called when missed', () => {
        gameBoard.receiveAttack([1, 1]);
        expect(gameBoard.grid[1][1]).toBe('X');
        expect(gameBoard.destroyer.hit).not.toHaveBeenCalled();
    })

    test('grid location has value "X" after hit and hit called once', () => {
        gameBoard.receiveAttack([4, 7]);
        expect(gameBoard.grid[4][7]).toBe('X');
        expect(gameBoard.destroyer.hit).toHaveBeenCalledTimes(1);
    })

    test('throws error when coordinates are invalid', () => {
        expect(() => gameBoard.receiveAttack([1, 11])).toThrow('receiveAttack coordinates must be less than 10!');
        expect(() => gameBoard.receiveAttack([11, 1])).toThrow('receiveAttack coordinates must be less than 10!');
        expect(() => gameBoard.receiveAttack([11, 11])).toThrow('receiveAttack coordinates must be less than 10!');
    })
})

test('a ship get hitsNumber max as high as its length', () => {
    gameBoard = new GameBoard();
    gameBoard.place(gameBoard.destroyer, [4, 6], 'horizontal', 'D');

    gameBoard.receiveAttack([4, 6]);
    gameBoard.receiveAttack([4, 7]);
    gameBoard.receiveAttack([4, 6]);
    
    expect(gameBoard.destroyer.isSunk).toBeTruthy();
    expect(gameBoard.destroyer.hitsNumber).toBe(2);
})

describe('allShipsSunk method', () => {
    beforeEach(() => {
        gameBoard = new GameBoard();
    })

    test('all ships are sunk so allShipsSunk should be true', () => {
        gameBoard.destroyer.isSunk = jest.fn(() => true);
        gameBoard.cruiser.isSunk = jest.fn(() => true);
        gameBoard.submarine.isSunk = jest.fn(() => true);
        gameBoard.battleship.isSunk = jest.fn(() => true);
        gameBoard.carrier.isSunk = jest.fn(() => true);

        expect(gameBoard.allShipsSunk()).toBeTruthy();
    })

    test('all ships are sunk except one so allShipsSunk should be false', () => {
        gameBoard.destroyer.isSunk = jest.fn(() => true);
        gameBoard.cruiser.isSunk = jest.fn(() => true);
        gameBoard.submarine.isSunk = jest.fn(() => false);
        gameBoard.battleship.isSunk = jest.fn(() => true);
        gameBoard.carrier.isSunk = jest.fn(() => true);

        expect(gameBoard.allShipsSunk()).toBeFalsy();
    })
})