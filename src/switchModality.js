import { gameController } from "./index.js"

export default function isModalityHumanVsHuman() {
    return gameController.playerTwo.type === 'human' ? true : false;
};