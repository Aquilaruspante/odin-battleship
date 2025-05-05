export default function isModalityHumanVsHuman(controller) {
    return controller.playerTwo.type === 'human' ? true : false;
};