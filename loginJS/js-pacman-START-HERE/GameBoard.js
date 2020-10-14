import{ GRID_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST} from "./setup"
class gameBoard {
    constructor(DOMGrid) {
        this.count = 0
        this.grid = [];
        this.DOMGrid = DOMGrid
    }

    showGameStatus(gameWin) {
        const div = document.createElement('div');
        div.classList.add('game-status');
        div.innerHTML = '${gamewin ? "Win!" : "Game Over!"}';
        this.DOMGrid.appendChild(div)
    }
     
    

    createGrid(level) {
        this.dotCount = 0;
        this.grid = [] 
        this.DOMGrid.innerHTML = ''
        this.DOMGrid.style.cssText = 'grid-template-columns: repeat(${GRID_SIZE}, ${CELL_SIZE}px)'

        level.forEach((square, i) => {
            const div = document.createElement('div')
            div.add.classList.add('square', CLASS_LIST[square])
        })
    }
}