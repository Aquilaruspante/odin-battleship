export let elements = {};

export function initDOMElements() {
    elements = {
        timeOutDialog: document.querySelector('#timeout-dialog'),
        doNotLook: document.querySelector('#do-not-look'),
        yourTurn: document.querySelector('#active-player'),
        counter: document.querySelector('#counter'),
        gameOverDialog: document.querySelector('#game-over-dialog'),
        winnerAnnounce: document.querySelector('#announce-winner'),
        playAgainButton: document.querySelector('#play-again-button'),
        turnBoardActivePlayer: document.querySelector('#turn-board p'),
        boardOne: document.querySelector('.gameboard-1'),
        boardTwo: document.querySelector('.gameboard-2'),
        initialDialog: document.querySelector('#initial-dialog'),
        selectModality: document.querySelector('#modality'),
        choosePlayerOneName: document.querySelector('#player-one'),
        choosePlayerTwoName: document.querySelector('#player-two'),
    };
}
