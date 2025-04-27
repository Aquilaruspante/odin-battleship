import eventBus from "../utils/eventBus.js";

export default function setEventListeners() {
    eventBus.addEventListener('attackResult', (e) => {
        console.log(e.detail);
    })
}