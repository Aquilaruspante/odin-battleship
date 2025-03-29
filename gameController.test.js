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
    })

    test('activePlayer is instance of Player', () => {
        gameController.initialize();
        expect(gameController.activePlayer).toBeInstanceOf(Player);
   })

   test('all ships hitsNumber get reset to 0', () => {
        // playerOne
        gameController.playerOne.gameBoard.destroyer.hitsNumber = 1;
        gameController.playerOne.gameBoard.cruiser.hitsNumber = 2;
        gameController.playerOne.gameBoard.carrier.hitsNumber = 3;

        // playerTwo
        gameController.playerTwo.gameBoard.destroyer.hitsNumber = 1;    
        gameController.playerTwo.gameBoard.cruiser.hitsNumber = 2;
        gameController.playerTwo.gameBoard.carrier.hitsNumber = 3;

        gameController.initialize();
        expect(gameController.playerTwo.gameBoard.destroyer.hitsNumber).toBe(0);
   })

   test('all ships isPlaced property reset to false', () => {
        gameController.playerOne.gameBoard.place(gameController.playerOne.gameBoard.cruiser, [3, 4], 'horizontal', 'C');
        gameController.playerOne.gameBoard.place(gameController.playerOne.gameBoard.battleship, [5, 4], 'horizontal', 'B');
        gameController.initialize();

        expect(gameController.playerOne.gameBoard.cruiser.isPlaced).toBeFalsy();
        expect(gameController.playerOne.gameBoard.battleship.isPlaced).toBeFalsy();
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

describe('composeGameBoard method', () => {
    beforeEach(() => {
        gameController = new GameController();
        gameController.playerOne.gameBoard.place = jest.fn((ship) => { ship.isPlaced = true });
        gameController.playerTwo.gameBoard.place = jest.fn((ship) => { ship.isPlaced = true });
    })

    test('composeGameBoard calls place() for every ship', () => {
        gameController.composeGameBoard();
        expect(gameController.playerOne.gameBoard.place).toHaveBeenCalledTimes(5);
        expect(gameController.playerTwo.gameBoard.place).toHaveBeenCalledTimes(5);
    });
    

    test('composeGameBoard place one ship per type for every player', () => {
        gameController.composeGameBoard();
        expect(gameController.playerOne.gameBoard.destroyer.isPlaced).toBeTruthy();
        expect(gameController.playerOne.gameBoard.cruiser.isPlaced).toBeTruthy();
        expect(gameController.playerOne.gameBoard.submarine.isPlaced).toBeTruthy();
        expect(gameController.playerOne.gameBoard.battleship.isPlaced).toBeTruthy();
        expect(gameController.playerOne.gameBoard.carrier.isPlaced).toBeTruthy();       
    })
})

describe('attackOnPlayerTwo method', () => {
    beforeEach(() => {
        gameController = new GameController();
        gameController.playerTwo.gameBoard.receiveAttack = jest.fn((coordinates) => coordinates);
    })

    test('attackOnPlayerTwo get called once when active player is playerOne', () => {
        gameController.activePlayer = gameController.playerOne;
        gameController.attackOnPlayerTwo([3, 4]);
        expect(gameController.playerTwo.gameBoard.receiveAttack).toBeCalledTimes(1);
    })

    test('attackOnPlayerTwo gets called with the right argument', () => {
        gameController.activePlayer = gameController.playerOne;
        gameController.attackOnPlayerTwo([3, 4]);
        expect(gameController.playerTwo.gameBoard.receiveAttack).toBeCalledWith([3, 4]);
    })

    test('attackOnePlayerTwo does not get called if active player is playertwo', () => {
        gameController.activePlayer = gameController.playerTwo;
        gameController.attackOnPlayerTwo();
        expect(gameController.playerTwo.gameBoard.receiveAttack).not.toBeCalled()
    })
})

describe('attackOnPlayerOnethod', () => {
    beforeEach(() => {
        gameController = new GameController();
        gameController.playerOne.gameBoard.receiveAttack = jest.fn((coordinates) => coordinates);
    })

    test('attackOnPlayerOne get called once when acrive player is player 2', () => { 
        gameController.activePlayer = gameController.playerTwo;
        gameController.attackOnPlayerOne([3, 4]);
        expect(gameController.playerOne.gameBoard.receiveAttack).toBeCalledTimes(1);
    })

    test('attackOnPlayerOne gets called with the right argument', () => {
        gameController.activePlayer = gameController.playerTwo;
        gameController.attackOnPlayerOne([3, 4]);
        expect(gameController.playerOne.gameBoard.receiveAttack).toBeCalledWith([3, 4]);
    })

    test('attackOnePlayerOne does not get called if active player is playerOne', () => {
        gameController.activePlayer = gameController.playerOne;
        gameController.attackOnPlayerOne()
        expect(gameController.playerOne.gameBoard.receiveAttack).not.toBeCalled()
    })
})