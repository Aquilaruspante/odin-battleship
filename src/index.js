import './styles.css';
import { initGame, showInitialDialog } from './views/DOMManager.js';
import { initDOMElements } from './views/DOMElements.js';

export let gameController;

window.onload = (event) => {
    initDOMElements();

    showInitialDialog();
    initGame();
};