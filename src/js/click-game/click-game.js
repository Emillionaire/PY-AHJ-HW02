export default class ClickGame {
    constructor(element) {
        this._element = element;
    };

    createGameField() {
        console.log('Create field started!');
    
        for (let i = 0; i < 16; i++) {
            let cell = this._element.insertAdjacentElement('beforeend', document.createElement('div'));
            this._element.appendChild(cell);
            cell.classList.add('cell');
            console.log('Cell created!');
        };
    };

    setPerson() {
        const cells = document.querySelectorAll('.cell');
        const personPosition = Math.floor(Math.random()*(16 - 0) + 0);
        const personCell = cells[personPosition];

        Array.from(cells).forEach(
            (el) => el.classList.remove('cell-with-person')
        );

        personCell.classList.add('cell-with-person');
    }

}