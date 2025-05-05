import { expect, jest } from '@jest/globals';
import AIController from './aiController.js';

describe('attack method', () => {
    test('attack method calls attackOnPlayerOne function', () => {
        const aiController = new AIController();
        const controller = {
            attackOnPlayerOne: jest.fn(),
        };
        aiController.attack();
        expect(controller.attackOnPlayerOne).toHaveBeenCalledTimes(1);
    });
});