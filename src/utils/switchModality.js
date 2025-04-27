import { controller } from "../views/DOMManager.js";

export default function isModalityHumanVsHuman() {
    return controller.playerTwo.type === 'human' ? true : false;
};