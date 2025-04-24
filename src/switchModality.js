import { gameController } from "./index.js"

export default function modality() {
    if (gameController.playerTwo.type === 'human') {
        return 'human-human';
    } else if(gameController.playerTwo.type === 'computer') {
        return 'human-computer';
    };
};