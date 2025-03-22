export default class Ship {
    constructor (length) {
        if (length < 2 || length > 5) {
            throw new Error('ship length should be between 2 and 5');
        }
        this.length = length;
        this.hitsNumber = 0;
    }

    hit() {
        this.hitsNumber += 1;
    }

    isSunk() {
        return this.hitsNumber >= this.length;
    }
}

