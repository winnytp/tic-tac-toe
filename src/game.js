console.log('Tic Tac Toe');

const gameBoard = (() => {

})();

// Display Module
const displayController = (() => {

    const grid = document.querySelector('.gameboard');

    function _removeOldGrid() {
        if (!grid.firstElementChild) return;
        document.querySelectorAll('.item').forEach(e => e.remove());
    }

    function reset() {
        _removeOldGrid();
        for (let i = 0; i < 9; i++) {
            const div = document.createElement('div');
            div.classList.add('item');
            div.setAttribute('id', i);
            grid.appendChild(div);
        }
        console.log('Created new grid.')
    }

    return {
        reset
    }
})();

displayController.reset();