import ShootNode from "./shootNode.js";
import ShootPlot from "./shootPlot.js";

export default class AIController {
    constructor (controller) {
        this.controller = controller;
        this.attackFeedback = false;
        this.plotter = new ShootPlot();
    };

    getAttackFeedback(result, coordinates) {
        if (result === 'hit') {
            this.attackFeedback = true;
            this.plotter.getOrigin(coordinates);
        } else {
            this.attackFeedback = false;
        };
    };

    attack() {
        let x;
        let y;

        if (!this.attackFeedback) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        } else {
            const index = Math.floor(Math.random() * 4);
            switch (index) {
                case 0:
                    if (this.plotter.north) {
                        x = this.plotter.north[0];
                        y = this.plotter.north[1];
                    } else {
                        this.attack()
                    };
                    break;
                case 1:
                    if (this.plotter.east) {
                        x = this.plotter.east[0];
                        y = this.plotter.east[1];
                    } else {
                        this.attack()
                    };
                    break;
                case 2:
                    if (this.plotter.south) {
                        x = this.plotter.south[0];
                        y = this.plotter.south[1];
                    } else {
                        this.attack()
                    };
                    break;
                case 3:
                    if (this.plotter.west) {
                        x = this.plotter.west[0];
                        y = this.plotter.west[1];
                    } else {
                        this.attack()
                    };
                    break;
            };
        };
        console.log(this.plotter);
        this.controller.attackOnPlayerOne([x, y]);
    };
};