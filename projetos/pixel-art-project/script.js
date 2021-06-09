const board = document.querySelector('#pixel-board');
const input = document.getElementById('board-size');

// Gerando cores aleatórias
function randomRGB() {
  const { round } = Math;
  const { random } = Math;
  const number = 255;
  return `(${round(random() * number)}, ${round(random() * number)}, ${round(random() * number)})`;
}

// Selecionando as cores
document.querySelectorAll('.color').forEach((i) => i.addEventListener('click', () => {
  const color = document.querySelector('.selected');
  color.classList.remove('selected');
  i.classList.add('selected');
}));

// Pintando os pixels
function drawingPixels() {
  document.querySelectorAll('.pixel').forEach((i) => i.addEventListener('click', () => {
    const pixels = i;
    const selected = document.querySelector('.selected');
    pixels.classList.remove('white');
    pixels.style.backgroundColor = selected.style.backgroundColor;
  }));
}

// Botão limpar quadro
document.querySelector('#clear-board').addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = '';
    pixels[i].classList.add('white');
  }
});

// Criar quadro padrão
function defaultBoard() {
  for (let index = 0; index < 5; index += 1) {
    const row = document.createElement('tr');
    board.appendChild(row);
    for (let pixelRow = 0; pixelRow < 5; pixelRow += 1) {
      const pixel = document.createElement('td');
      pixel.className = 'pixel white';
      row.appendChild(pixel);
    }
  }
}

// Criar quadro
function clearBoard() {
  while (board.firstChild) {
    board.removeChild(board.lastChild);
  }
}

function createBoard(valor) {
  for (let index = 0; index < valor; index += 1) {
    const row = document.createElement('tr');
    board.appendChild(row);
    for (let pixelRow = 0; pixelRow < valor; pixelRow += 1) {
      const pixel = document.createElement('td');
      pixel.className = 'pixel white';
      row.appendChild(pixel);
    }
  }
}

document.querySelector('#generate-board').addEventListener('click', () => {
  clearBoard();
  if (input.value >= 5 && input.value <= 50) {
    createBoard(input.value);
    input.value = '';
  } else if (input.value > 50) {
    window.alert('Board inválido!');
    createBoard(50);
    input.value = '';
  } else {
    window.alert('Board inválido!');
    defaultBoard();
    input.value = '';
  }
  drawingPixels();
});

window.onload = () => {
  // Gerando o quadro padrão
  defaultBoard();
  drawingPixels();
  // Gerando cores aleatórias
  const colors = document.querySelectorAll('.color');
  for (let i = 1; i < 4; i += 1) {
    const color = `${randomRGB()}`;
    colors.item(i).style.backgroundColor = `rgb${color}`;
  }
};
