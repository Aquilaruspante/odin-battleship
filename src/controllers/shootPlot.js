export default class ShootPlot {
    constructor (origin) {
        this.originX = origin[0];
        this.originY = origin[1];
        this.north = [this.originX, this.originY + 1];
        this.east = [this.originX + 1, this.originY];
        this.south = [this.originX, this.originY - 1];
        this.west = [this.originX - 1, this.originY];
    };
};