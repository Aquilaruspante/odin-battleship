import GameBoard from "./gameBoard"

export default class Player {
    constructor (type) {
        this.gameBoard = new GameBoard()
        this.type = type;
    }
}