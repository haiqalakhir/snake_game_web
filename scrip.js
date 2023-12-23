let canvas=document.getElementById('game');
let context = canvas.getContext('2d');

let grid = 16;
let count = 0;

let snake = {
    x: 160,
    y: 160,
    dx: grid,
    dy: 0,
    cells: [],
    maxCells: 4
}

let apple ={
    x:320,
    y:320
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function loop(){
    requestAnimationFrame(loop);

    if (++count < 4) {
        return;
    }
    count = 0;
    context.clearRect(0, 0, canvas.clientWidth, canvas.height);
}