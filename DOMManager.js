import gameController from './gameController';

window.onload = (event) => {
    const boardOne = document.querySelector('.gameboard-1');
    const boardTwo = document.querySelector('.gameboard-2');

    for (let x = 0; x < 10; x++) {
        const row = document.createElement('div');
        row.setAttribute('class', `row row-${x}`);
        
        for (let y = 0; y < 10; y++) {
            const col = document.createElement('div');
            col.setAttribute('class', `col col-${y}`);
            col.addEventListener('click', () => {
                gameController.attackOnPlayerTwo(x, y);
            })
            row.appendChild(col);
        }
        boardOne.appendChild(row);
    }


    for (let x = 0; x < 10; x++) {
        const row = document.createElement('div');
        row.setAttribute('class', `row row-${x}`);
        
        for (let y = 0; y < 10; y++) {
            const col = document.createElement('div');
            col.setAttribute('class', `col col-${y}`);
            col.addEventListener('click', () => {
                gameController.attackOnPlayerOne(x, y);
            })
            row.appendChild(col);
        }
        boardTwo.appendChild(row);
    }
}