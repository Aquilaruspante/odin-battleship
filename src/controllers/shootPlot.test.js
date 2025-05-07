import { beforeEach, describe, expect, test } from "@jest/globals";
import ShootPlot from "./shootPlot.js";

let plotter;

describe('getOrigin method', () => {
    beforeEach(() => {
        plotter = new ShootPlot();
    });

    test('When origin is in the middle, nodes are calculated correctly', () => {
        plotter.getOrigin([4, 5]);

        expect(plotter.north).toStrictEqual([5, 3]);
        expect(plotter.east).toStrictEqual([6, 4]);
        expect(plotter.south).toStrictEqual([5, 5]);
        expect(plotter.west).toStrictEqual([4, 4]);
    });

    test('When origin is on the top row plotter.north is null', () => {
        plotter.getOrigin([0, 5]);

        expect(plotter.north).toBeNull();
        expect(plotter.east).not.toBeNull();
        expect(plotter.south).not.toBeNull();
        expect(plotter.west).not.toBeNull();
    });

    test('When origin is on the eastern column plotter.east is null', () => {
        plotter.getOrigin([1, 9]);

        expect(plotter.north).not.toBeNull();
        expect(plotter.east).toBeNull();
        expect(plotter.south).not.toBeNull();
        expect(plotter.west).not.toBeNull();
    });

    test('When origin is on the southern row plotter.south is null', () => {
        plotter.getOrigin([9, 8]);

        expect(plotter.north).not.toBeNull();
        expect(plotter.east).not.toBeNull();
        expect(plotter.south).toBeNull();
        expect(plotter.west).not.toBeNull();
    });

    test('When origin is on the western column plotter.west is null', () => {
        plotter.getOrigin([1, 0]);

        expect(plotter.north).not.toBeNull();
        expect(plotter.east).not.toBeNull();
        expect(plotter.south).not.toBeNull();
        expect(plotter.west).toBeNull();
    });

    test('When origin is on the upper left corner plotter.west & north to be null', () => {
        plotter.getOrigin([0, 0]);

        expect(plotter.north).toBeNull();
        expect(plotter.east).not.toBeNull();
        expect(plotter.south).not.toBeNull();
        expect(plotter.west).toBeNull();
    });

    test('When origin is on the upper right corner plotter.east & north to be null', () => {
        plotter.getOrigin([0, 9]);

        expect(plotter.north).toBeNull();
        expect(plotter.east).toBeNull();
        expect(plotter.south).not.toBeNull();
        expect(plotter.west).not.toBeNull();
    });
    
    test('When origin is on the lower right corner plotter.east and south to be null', () => {
        plotter.getOrigin([9, 9]);

        expect(plotter.north).not.toBeNull();
        expect(plotter.east).toBeNull();
        expect(plotter.south).toBeNull();
        expect(plotter.west).not.toBeNull();
    });

    test('When origin is on the lower left corner plotter.west and south to be null', () => {
        plotter.getOrigin([9, 0]);

        expect(plotter.north).not.toBeNull();
        expect(plotter.east).not.toBeNull();
        expect(plotter.south).toBeNull();
        expect(plotter.west).toBeNull();
    });
});