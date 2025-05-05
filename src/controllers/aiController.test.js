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