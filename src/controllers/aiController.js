import ShootNode from "./shootNode.js";
import ShootPlot from "./shootPlot.js";

export default class AIController {
    constructor (controller) {
        this.controller = controller;
        this.originExists = false;
        this.firstOrigin = null;
        this.plotter = new ShootPlot();
        this.path = null;
        this.northPossible = true;
        this.eastPossible = true;
        this.southPossible = true;
        this.westPossible = true;
    };

    getAttackFeedback(result, coordinates) {
        if (result === 'hit' && !this.originExists) {
            if (!this.firstOrigin) this.firstOrigin = coordinates;
            this.plotter.getOrigin(coordinates);
            this.originExists = true;
        } else if (result === 'miss' || result === 'alreadyHit') {
            this.#breakPath();
            this.firstOrigin ? this.plotter.getOrigin(this.firstOrigin) : this.originExists = false;
            this.path = null;
        };
    };

    #breakPath() {
        switch (this.path) {
            case 'north':
                this.northPossible = false;
                this.path = null;
                break;
            case 'east':
                this.eastPossible = false;
                this.path = null;
                break;
            case 'south':
                this.southPossible = false;
                this.path = null;
                break;
            case 'west':
                this.westPossible = false;
                this.path = null;
                break;
        }
    }

    #checkFirstOriginDepleted() {
        if (!this.northPossible && !this.eastPossible && !this.southPossible && !this.westPossible) {
            this.firstOrigin = null;
            this.northPossible = true;
            this.eastPossible = true;
            this.southPossible = true;
            this.westPossible = true;
        }
    }

    attack() {
        this.#checkFirstOriginDepleted();

        let x;
        let y;

        if (!this.firstOrigin) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            this.controller.attackOnPlayerOne([x, y]);
        } else if (!this.path) {
            const index = Math.floor(Math.random() * 4);
            switch (index) {
                case 0:
                    if (this.plotter.north) {
                        if (this.northPossible) this.path = 'north';
                        x = this.plotter.north[1];
                        y = this.plotter.north[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        this.northPossible = false;
                        this.path = null;
                        this.attack()
                    };
                    break;
                case 1:
                    if (this.plotter.east) {
                        if (this.eastPossible) this.path = 'east';
                        x = this.plotter.east[1];
                        y = this.plotter.east[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        this.eastPossible = false;
                        this.path = null;
                        this.attack()
                    };
                    break;
                case 2:
                    if (this.plotter.south) {
                        if (this.southPossible) this.path = 'south';
                        x = this.plotter.south[1];
                        y = this.plotter.south[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        this.southPossible = false;
                        this.path = null;
                        this.attack()
                    };
                    break;
                case 3:
                    if (this.plotter.west) {
                        if (this.westPossible) this.path = 'west';
                        x = this.plotter.west[1];
                        y = this.plotter.west[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        this.westPossible = false;
                        this.path = null;
                        this.attack()
                    };
                    break;
            };
        } else {
            switch (this.path) {
                case 'north':
                    if (this.plotter.north && this.northPossible) {
                        x = this.plotter.north[1];
                        y = this.plotter.north[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        this.northPossible = false;
                        this.path = null;
                        this.attack();
                    };
                    break;
                case 'east':
                    if (this.plotter.east && this.eastPossible) {
                        x = this.plotter.east[1];
                        y = this.plotter.east[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        this.eastPossible = false;
                        this.path = null;
                        this.attack();
                    };
                    break;
                case 'south':
                    if (this.plotter.south && this.southPossible) {
                        x = this.plotter.south[1];
                        y = this.plotter.south[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        this.southPossible = false;
                        this.path = null;
                        this.attack();
                    };
                    break;
                case 'west':
                    if (this.plotter.west && this.westPossible) {
                        x = this.plotter.west[1];
                        y = this.plotter.west[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        this.westPossible = false;
                        this.path = null;
                        this.attack();
                    };
                    break;
            };
        };
    };
};