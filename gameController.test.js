import { beforeEach, describe, expect, test, jest } from '@jest/globals';
import GameController from './gameController';
import Player from './player';

let gameController;

describe('GameController instantiation', () => {
    beforeEach(() => {
        gameController = new GameController();
    })

    test('creating a GameController instance should initialize 2 players', () => {
        expect(gameController.playerOne).toBeInstanceOf(Player);    
        expect(gameController.playerTwo).toBeInstanceOf(Player);
    })

    test('playerOne is of type "human" and playerTwo "computer"', () => {
        expect(gameController.playerOne.type).toBe('human');
        expect(gameController.playerTwo.type).toBe('computer');
    })
})

describe('initialize method', () => {
    beforeEach(() => {
        gameController = new GameController()
        gameController.initialize();
    })

    test('activePlayer is instance of Player', () => {
        expect(gameController.activePlayer).toBeInstanceOf(Player);
   })

   test('all ships hitsNumber get reset to 0', () => {
        gameController.playerOne.gameBoard.destroyer.hitsNumber = 1;
        gameController.initialize();
        expect(gameController.playerOne.gameBoard.destroyer.hitsNumber).toBe(0);
   })
})

describe('attack method', () => {
    beforeEach(() => {
        gameController = new GameController();
        gameController.playerOne.gameBoard.receiveAttack = jest.fn(array => array);
        gameController.playerTwo.gameBoard.receiveAttack = jest.fn(array => array);
    })

    test('it calls receiveAttack on non playerTwo gameBoard when activePlayer is playerOne', () => {
        gameController.activePlayer = gameController.playerOne;
        gameController.attack();
        expect(gameController.playerTwo.gameBoard.receiveAttack).toHaveBeenCalledTimes(1);
    })

    test('it calls receiveAttack on non playerOne gameBoard when activePlayer is playerTwo', () => {
        gameController.activePlayer = gameController.playerTwo;
        gameController.attack();
        expect(gameController.playerOne.gameBoard.receiveAttack).toHaveBeenCalledTimes(1);
    })

    test('receiveAttack gets called with correct argument', () => {
        gameController.activePlayer = gameController.playerOne;
        gameController.attack([4, 5]);
        expect(gameController.playerTwo.gameBoard.receiveAttack).toHaveBeenCalledWith([4, 5])
    })
})

describe('switchPlayer method', () => {
    beforeEach(() => {
        gameController = new GameController();
        gameController.activePlayer = gameController.playerOne;
    })

    test('activePlayer switches correctly', () => {
        gameController.switchPlayer();
        expect(gameController.activePlayer).toBe(gameController.playerTwo);

        gameController.switchPlayer();
        expect(gameController.activePlayer).toBe(gameController.playerOne);
    })
})