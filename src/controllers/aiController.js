import { controller } from "../index.js";
import ShootNode from "./shootNode.js";
import ShootPlot from "./shootPlot.js";

export default class AIController {
    attack() {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);

        controller.attackOnPlayerOne([x, y]);
    };
};