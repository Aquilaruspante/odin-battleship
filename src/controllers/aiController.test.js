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
        aiController.plotter = {
            getOrigin: jest.fn((coordinates) => coordinates),
        };

    })
    test('getAttackFeedback calls getOrigin once with coordinates as argument, originEsist = true and path is defined', () => {
        aiController.getAttackFeedback('hit', [4, 5]);
        expect(aiController.plotter.getOrigin).toHaveBeenCalledWith([4, 5]);
        expect(aiController.plotter.getOrigin).toHaveBeenCalledTimes(1);
        expect(aiController.originExists).toBeTruthy();
        expect(aiController.path).toBeDefined();
    }); 

    test('if miss originExists = false and path - null', () => {
        aiController.getAttackFeedback('miss', [4, 4]);

        expect(aiController.originExists).toBeFalsy();
        expect(aiController.path).toBeNull();
    });
});

