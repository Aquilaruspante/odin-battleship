import { beforeEach } from '@jest/globals';
import Ship from './ship';

let ship;

describe('throw errors if the ship is created with wrong length', () => {
    test('throw "ship length should be between 2 and 5', () => {
        expect(() => new Ship(0)).toThrow('ship length should be between 2 and 5');

        expect(() => new Ship(6)).toThrow('ship length should be between 2 and 5');

        expect(() => new Ship(1)).toThrow();

        expect(() => new Ship(2)).not.toThrow();

        expect(() => new Ship(5)).not.toThrow();
    })
})

describe('hit method', () => {    
    beforeEach(() => {
        ship = new Ship(3);
    })

    test('hit method increases hitsNumber by 1', () => {
        expect(ship.hitsNumber).toBe(0);

        ship.hit();
        expect(ship.hitsNumber).toBe(1);

        ship.hit();
        expect(ship.hitsNumber).toBe(2);
    })
})

describe('isSunk method', () => {
    beforeEach(() => {
        ship = new Ship(3);
    })
    
    test('isSunk is false when hitsNumber is less than length', () => {
        ship.hitsNumber = 2;
        expect(ship.isSunk()).toBeFalsy();
        
        ship.hitsNumber = 1;
        expect(ship.isSunk()).toBeFalsy();

        ship.hitsNumber = 0;
        expect(ship.isSunk()).toBeFalsy();
    })

    test('isSunk is true when hitsNumber is greater or equal than length', () => {
        ship.hitsNumber = 3;
        expect(ship.isSunk()).toBeTruthy();

        ship.hitsNumber = 4;
        expect(ship.isSunk()).toBeTruthy();
    })
})

describe('isPlaced property', () => {
    beforeEach(() => {
        ship = new Ship(3);
    })

    test('newly created ships have isPlaced equal to false', () => {
        expect(ship.isPlaced).toBeFalsy();
    })
})