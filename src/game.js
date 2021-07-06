console.log('Tic Tac Toe');

const gameBoard = (() => {
    const positions = {
        1: 'x',
        2: 'o',
        3: 'x',
        4: 'o',
        5: 'x',
        6: 'o',
        7: 'x',
        8: 'o',
        9: 'x'
    };

    return {
        positions,
    };
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
            const item = document.createElement('div');
            item.classList.add('item');
            item.setAttribute('id', i);
            grid.appendChild(item);
        }
        console.log('Created new grid.')
    }

    function draw(position, value) {
        const location = document.getElementById(position);
        location.textContent = value;
    }

    return {
        reset,
        draw,
    };
})();

displayController.reset();