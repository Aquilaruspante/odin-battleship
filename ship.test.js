const Ship = require('./ship');

const ship = new Ship(3);

describe('hit method increases hits property by one', () => {
    beforeAll(() => {
        ship.hitsNumber = 0;
    })
    afterAll(() => {
        ship.hitsNumber = 0;
    })
    beforeEach(() => {
        ship.hit();
    })
    test('increase hits from 0 to 1', () => {
        expect(ship.hitsNumber).toBe(1);
    })
    test('increase hits from 1 to 2', () => {
        expect(ship.hitsNumber).toBe(2);
    })
})

describe('isSunk retuns true only when hits === length', () => {
    beforeAll(() => {
        ship.hitsNumber =0;
    })
    afterAll(() => {
        ship.hitsNumber = 0;
    })
    beforeEach(() => {
        ship.hit();
    })
    test('after first hit it should return false', () => {
        expect(ship.isSunk()).toBeFalsy();
    })
    test('after second hit it should return false', () => {
        expect(ship.isSunk()).toBeFalsy();
    })
    test('after third hit it should return true', () => {
        expect(ship.isSunk()).toBeTruthy();
    })
})