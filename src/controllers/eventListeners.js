import eventBus from "../utils/eventBus.js";
import { renderHit } from "../views/DOMManager.js";

export default function setEventListeners() {
    eventBus.addEventListener('attackResult', (e) => {
        renderHit(e.detail.receiver, e.detail.result, e.detail.coordinates);
    })
}