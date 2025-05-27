import eventBus from "../utils/eventBus.js";

export default class Ship {
    constructor (length, symbol) {
        if (length < 2 || length > 5) {
            throw new Error('ship length should be between 2 and 5');
        }
        this.length = length;
        this.hitsNumber = 0;
        this.isPlaced = false;
        this.symbol = symbol
    }

    hit() {
        this.hitsNumber += 1;
        this.isSunk();
    }

    isSunk() {
          if (this.hitsNumber >= this.length) {
            eventBus.dispatchEvent(new CustomEvent('shipSunk', { detail: { ship: this }}));
            return true;
        } else {
            return false;
        };      
    };
};


