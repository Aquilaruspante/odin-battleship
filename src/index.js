import './styles.css';
import { initGame, showInitialDialog } from './views/DOMManager.js';
import { initDOMElements } from './views/DOMElements.js';
import setupEventListeners from './controllers/eventListeners.js';

export let gameController;

window.onload = (event) => {
    initDOMElements();
    setupEventListeners();
    showInitialDialog();
    initGame();
};