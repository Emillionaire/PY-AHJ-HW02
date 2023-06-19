// TODO: write code here
import ClickGame from "./click-game/click-game.js";

document.addEventListener('DOMContentLoaded', () => {
    const clickGame = new ClickGame(document.querySelector('.click-game'));

    window.clickGame = clickGame;

    clickGame.createGameField();
    clickGame.setPerson();

    const personMoveInterval = setInterval(() => {
        clickGame.setPerson();
    }, 3000)


});