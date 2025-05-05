import ShootNode from "./shootNode.js";
import ShootPlot from "./shootPlot.js";

export default class AIController {
    constructor (controller) {
        this.controller = controller;
    };

    attack() {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);

        this.controller.attackOnPlayerOne([x, y]);
    };
};