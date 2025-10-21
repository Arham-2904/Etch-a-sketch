const container = document.getElementById('container');
const resizeBtn = document.getElementById('resizeBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const clearBtn = document.getElementById('clearBtn');

const baseSize = 40;
const baseGrid = 16;
const containerSize = baseSize * baseGrid;

let rainbowMode = false;

function makeGrid(size){
    container.innerHTML = '';

    const squareSize = Math.floor(containerSize / size);

    container.style.width = `${squareSize * size}px`;
    container.style.height = `${squareSize * size}px`;

    for(let i=0; i < size * size; i++){
    const div = document.createElement('div');
    div.classList.add("Square");

    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    div.addEventListener('mouseenter', () => {
        if(rainbowMode){
            div.style.backgroundColor = getRandomColor();
        }
        else{
            div.classList.add('hovered');
        }
    });

    container.appendChild(div);
    }
}

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

makeGrid(16);

resizeBtn.addEventListener('click', ()=>{
    let newSize = prompt('Enter new grid size (1-100):');

    newSize = parseInt(newSize);

    if(isNaN(newSize) || newSize < 1 || newSize > 100){
        alert('Please enter a valid number between 1 and 100');
        return;
    }

    makeGrid(newSize)
})

rainbowBtn.addEventListener('click', ()=>{
    rainbowMode = !rainbowMode;
})

clearBtn.addEventListener('click', ()=>{
    const squares = document.querySelectorAll('.Square');

    squares.forEach(square => {
        square.style.backgroundColor = '';
        square.classList.remove('hovered');
    });
});