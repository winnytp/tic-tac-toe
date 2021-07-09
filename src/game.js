console.log('Tic Tac Toe');

let turn = 'x';

const Player = (mark, isHuman) => {
    function play(position) {
        const location = document.getElementById(position);
        if (location.textContent) return;
        location.textContent = String(mark);
        gameBoard.set(position, String(mark));
        gameBoard.checkWin();
        gameBoard.changeTurn();
    }
    return { mark, isHuman, play };
};

const gameBoard = (() => {
    const positions = {};

    function set(n, value) {
        positions[n] = value;
    }

    function reset() {
        for (let i = 0; i < 9; i++) {
            positions[i] = undefined;
        }
    }

    function changeTurn() {
        if (turn === 'x') {
            return turn = 'o';
        } else {
            return turn = 'x';
        }
    }

    function checkWin() {
        let p = gameBoard.positions;
        if ((p[1] === p[0]) && (p[2] === p[0]) && p[0] != undefined) console.log('win');
        if ((p[3] === p[0]) && (p[6] === p[0]) && p[0] != undefined) console.log('win');
        if ((p[4] === p[0]) && (p[8] === p[0]) && p[0] != undefined) console.log('win');
        if ((p[4] === p[1]) && (p[7] === p[1]) && p[1] != undefined) console.log('win');
        if ((p[5] === p[2]) && (p[8] === p[2]) && p[2] != undefined) console.log('win');
        if ((p[4] === p[3]) && (p[5] === p[3]) && p[3] != undefined) console.log('win');
        if ((p[7] === p[6]) && (p[8] === p[6]) && p[6] != undefined) console.log('win');
        if ((p[4] === p[6]) && (p[2] === p[6]) && p[6] != undefined) console.log('win');
    }

    return {
        positions,
        set,
        reset,
        changeTurn,
        checkWin,
    };
})();

const displayController = (() => {
    const grid = document.querySelector('.gameboard');

    function _removeOldGrid() {
        if (!grid.firstElementChild) return;
        document.querySelectorAll('.item').forEach(e => e.remove());
        gameBoard.reset();
    }

    function render() {
        _removeOldGrid();
        for (let i = 0; i < 9; i++) {
            const item = document.createElement('div');
            item.classList.add('item');
            item.setAttribute('id', i);
            item.addEventListener('click', () => {
                // _add(i, 'x');
                if (turn === 'x') {
                    playerX.play(i);
                } else {
                    playerO.play(i);
                }
                draw();
            });
            grid.appendChild(item);
        }
        console.log('Created new grid.')
    }

    function _add(position, value) {
        if (value === undefined) return;
        const location = document.getElementById(position);
        location.textContent = String(value);
        gameBoard.set(position, String(value));
    }

    function draw() {
        for (let i = 0; i < 9; i++) {
            _add(i, gameBoard.positions[i]);
        }
    }

    return {
        render,
        draw,
    };
})();

gameBoard.reset();
displayController.render();

const playerX = Player('x', 'yes');
const playerO = Player('o', 'yes');