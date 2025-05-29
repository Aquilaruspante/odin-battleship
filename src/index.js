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
    console.debug('controller created');
    controller.initialize();
    console.debug('controller initialized');
    eventBus.dispatchEvent(new CustomEvent('controllerCreated', { detail: { controller }}));
};

window.onload = (event) => {
    initDOMElements();
    domManager = new DOMManager();
    console.debug('domManager created');
    setupEventListeners(domManager);
    console.debug('event Listeners set up');
    domManager.showInitialDialog();
    domManager.initGame();
};