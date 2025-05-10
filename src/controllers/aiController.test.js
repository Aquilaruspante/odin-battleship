import { beforeEach, expect, jest } from '@jest/globals';
import AIController from './aiController.js';

describe('attack method', () => {
    test('attack method calls attackOnPlayerOne function', () => {
        const controller = {
            attackOnPlayerOne: jest.fn(),
        };
        const aiController = new AIController(controller);
        aiController.attack();
        expect(controller.attackOnPlayerOne).toHaveBeenCalledTimes(1);
    });
});

describe('getAttackFeedback method', () => {
    let plotter;
    let aiController;

    beforeEach(() => {
        const controller = {};
        aiController = new AIController(controller);
        plotter = {
            getOrigin: jest.fn((coordinates) => coordinates),
        };
    })
    test('getAttackFeedback calls getOrigin once with coordinates as argument', () => {
        aiController.getAttackFeedback('hit', [4, 5]);
        expect(plotter.getOrigin).toHaveBeenCalledWith([4, 5]);
        expect(plotter.getOrigin).toHaveBeenCalledTimes(1);
    }); 
});