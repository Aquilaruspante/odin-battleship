class Ship {
    constructor (length) {
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

module.exports = Ship; 