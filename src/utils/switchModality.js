import { controller } from "../index.js";

export default function isModalityHumanVsHuman() {
    return controller.playerTwo.type === 'human' ? true : false;
};