import './styles.css';
import { initDOMElements } from './views/DOMElements.js';
import DOMManager from './views/DOMManager.js';
import setupEventListeners from './controllers/eventListeners.js';
import GameController from './controllers/gameController.js';
import eventBus from './utils/eventBus.js';

export let domManager;
export let controller;

export function createController(modality, playerOneName, playerTwoName) {
    controller = new GameController(modality, playerOneName, playerTwoName);
    controller.initialize();
}

window.onload = (event) => {
    initDOMElements();
    domManager = new DOMManager();
    setupEventListeners(domManager);
    domManager.showInitialDialog();
    domManager.initGame();
};