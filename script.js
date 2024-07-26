let snakeContainer = document.getElementById('snake-container');
let snakeCanvas = document.getElementById('snake-canvas');

let scoreDisplay = document.getElementById('score');
let lengthDisplay = document.getElementById('length');

snakeCanvas.width = snakeContainer.offsetWidth - 60;
snakeCanvas.height = snakeCanvas.width / 2.5;


const blocksX = 40;
const blocksY = 16;
const pixelsPerBlock = snakeCanvas.height / blocksY;
let centerX = (Math.ceil(blocksX / 2) - 1) * pixelsPerBlock;
let centerY = (Math.ceil(blocksY / 2) - 1) * pixelsPerBlock;
const interval = 80;
const eventKeysToDirection = {
    w: 'up',
    a: 'left',
    s: 'down',
    d: 'right',
    ArrowRight: 'right',
    ArrowLeft: 'left',
    ArrowDown: 'down',
    ArrowUp: 'up',
};
const oppositeDirections = {
    right: 'left',
    left: 'right',
    up: 'down',
    down: 'up',
};

let score = 0;
let length = 1;

let snakeCoords = {
    H: {x: centerX, y: centerY},
    B: [],
    F: {},
};

do {
    snakeCoords.F = {
        x: Math.floor(Math.random() * blocksX) * pixelsPerBlock,
        y: Math.floor(Math.random() * blocksY) * pixelsPerBlock,
    };
} while (snakeCoords.F.x === centerX && snakeCoords.F.y === centerY);

let gameOver = false;
let oppositeDirection = null;
let moveDirection = null;
render()

function render() {
    if (!gameOver) {
        let canvas = snakeCanvas;
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'red';
        ctx.fillRect(snakeCoords.H.x, snakeCoords.H.y, pixelsPerBlock, pixelsPerBlock);
        ctx.fillStyle = 'black';
        for (let obj of snakeCoords.B) {
            ctx.fillRect(obj.x, obj.y, pixelsPerBlock, pixelsPerBlock);
        }
        ctx.fillStyle = 'green';
        ctx.fillRect(snakeCoords.F.x, snakeCoords.F.y, pixelsPerBlock, pixelsPerBlock);
        scoreDisplay.innerHTML = `Score: ${score}`;
        lengthDisplay.innerHTML = `Length: ${length}`;
    }
}