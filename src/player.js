import GameBoard from "./gameBoard.js"

export default class Player {
    constructor (type) {
        this.gameBoard = new GameBoard();
        this.type = type;
    }
}