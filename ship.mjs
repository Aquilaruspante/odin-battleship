class Ship {
    constructor (length) {
        if (length > 0 && length < 6) {
            this.length = length;
            this.hitsNumber = 0;
        } else {
            throw new Error('ship length should be between 1 and 5');
        }
    }

    hit() {
        this.hitsNumber += 1;
    }

    isSunk() {
        return this.hitsNumber >= this.length;
    }
}

module.exports = Ship; 