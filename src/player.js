import GameBoard from "./gameBoard.js"

export default class Player {
    constructor (type, name) {
        this.gameBoard = new GameBoard();
        this.type = type;
        this.name = name;
    };
};