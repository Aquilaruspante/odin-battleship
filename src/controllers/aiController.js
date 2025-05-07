import ShootNode from "./shootNode.js";
import ShootPlot from "./shootPlot.js";

export default class AIController {
    constructor (controller) {
        this.controller = controller;
        this.originExists = false;
        this.plotter = new ShootPlot();
        this.path = null;
    };

    getAttackFeedback(result, coordinates) {
        if (result === 'hit' && !this.originExists) {
            this.plotter.getOrigin(coordinates);
            this.originExists = true;
        } else if (result === 'miss') {
            this.originExists = false;
            this.path = null;
        };
    };

    createPath(path) {
        switch (path) {
            case 'north':
                this.path = 'north';
                break;
            case 'east':
                this.path = 'east';
                break;
            case 'south':
               this.path = 'south';
                break;
            case 'west':
                this.path = 'west';
                break;
        };
    };

    attack() {
        let x;
        let y;

        if (!this.originExists) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            this.controller.attackOnPlayerOne([x, y]);
        } else if (!this.path) {
            const index = Math.floor(Math.random() * 4);
            switch (index) {
                case 0:
                    console.log('going north');
                    if (this.plotter.north) {
                        this.createPath('north');
                        x = this.plotter.north[1];
                        y = this.plotter.north[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        console.log('impossible');
                        this.attack()
                    };
                    break;
                case 1:
                    console.log('going east');
                    if (this.plotter.east) {
                        this.createPath('east');
                        x = this.plotter.east[1];
                        y = this.plotter.east[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        console.log('impossible');
                        this.attack()
                    };
                    break;
                case 2:
                    console.log('going south');
                    if (this.plotter.south) {
                        this.createPath('south');
                        x = this.plotter.south[1];
                        y = this.plotter.south[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        console.log('impossible');
                        this.attack()
                    };
                    break;
                case 3:
                    console.log('going west');
                    if (this.plotter.west) {
                        this.createPath('west')
                        x = this.plotter.west[1];
                        y = this.plotter.west[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        console.log('impossible');
                        this.attack()
                    };
                    break;
            };
        } else {
            switch (this.path) {
                case 'north':
                    console.log('going north');
                    if (this.plotter.north) {
                        x = this.plotter.north[1];
                        y = this.plotter.north[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        console.log('impossible');
                        this.createPath('south');
                        this.attack();
                    };
                    break;
                case 'east':
                    console.log('going east');
                    if (this.plotter.east) {
                        x = this.plotter.east[1];
                        y = this.plotter.east[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        console.log('impossible');
                        this.createPath('west');
                        this.attack();
                    };
                    break;
                case 'south':
                    console.log('going south');
                    if (this.plotter.south) {
                        x = this.plotter.south[1];
                        y = this.plotter.south[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        console.log('impossible');
                        this.createPath('north');
                        this.attack();
                    };
                    break;
                case 'west':
                    console.log('going west');
                    if (this.plotter.west) {
                        x = this.plotter.west[1];
                        y = this.plotter.west[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        console.log('impossible');
                        this.createPath('east');
                        this.attack();
                    };
                    break;
            };
        };
    };
};