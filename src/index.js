import './styles.css';
import { initDOMElements } from './views/DOMElements.js';
import DOMManager from './views/DOMManager.js';
import setupEventListeners from './controllers/eventListeners.js';

export let domManager;

window.onload = (event) => {
    initDOMElements();
    domManager = new DOMManager();
    setupEventListeners(domManager);
    domManager.showInitialDialog();
    domManager.initGame();
};