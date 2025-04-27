import eventBus from "../utils/eventBus.js";
import { renderHit, renderTimeOut } from "../views/DOMManager.js";
import isModalityHumanVsHuman from "../utils/switchModality.js";

export default function setEventListeners() {
    eventBus.addEventListener('attackResult', (e) => {
        renderHit(e.detail.receiver, e.detail.result, e.detail.coordinates);
    });

    eventBus.addEventListener('switchPlayer', (e) => {
        const activePlayer = e.detail.activePlayer;
        isModalityHumanVsHuman() && renderTimeOut(activePlayer);
    })
}