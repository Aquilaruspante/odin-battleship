import { jest } from '@jest/globals';
import Player from './player';
import GameBoard from './gameBoard';
import { expect } from '@jest/globals';

test('player has gameBoard', () => {
    const player = new Player;
    expect(player.gameBoard).toBeInstanceOf(GameBoard);
})

test('player can be human or computer', () => {
    const human = new Player('human');
    const computer = new Player('computer');

    expect(human.type).toBe('human');
    expect(computer.type).toBe('computer');
})