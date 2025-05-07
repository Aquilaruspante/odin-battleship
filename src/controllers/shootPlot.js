export default class ShootPlot {
    constructor () {
        this.originX = null;
        this.originY = null;
        this.north = null;
        this.east = null;
        this.south = null;
        this.west = null;
    };

    getOrigin(origin) {
        this.originX = origin[1];
        this.originY = origin[0];
        this.north = (this.originY - 1 >= 0 && this.originY - 1 < 10) ? [this.originX, this.originY - 1] : null;
        this.east = (this.originX + 1 >= 0 && this.originX + 1 < 10) ? [this.originX + 1, this.originY]: null;
        this.south = (this.originY + 1 >= 0 && this.originY + 1 < 10) ? [this.originX, this.originY + 1] : null;
        this.west = (this.originX - 1 >= 0 && this.originX - 1 < 10) ? [this.originX - 1, this.originY] : null;
    }
};