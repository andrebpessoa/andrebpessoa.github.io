const rgbColor = document.querySelector('#rgb-color');

function randomRGB() {
  const { round } = Math;
  const { random } = Math;
  const number = 255;
  return `(${round(random() * number)}, ${round(random() * number)}, ${round(random() * number)})`;
}

document.querySelectorAll('.ball').forEach((i) => i.addEventListener('click', () => {
  const answer = document.querySelector('#answer');
  const score = document.querySelector('#score');
  let result = document.querySelector('#rgb-color').innerHTML;
  result = `rgb${result}`;
  if (result === i.style.backgroundColor) {
    answer.innerText = 'Acertou!';
    score.innerText = Number(score.innerText) + 3;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}));

document.querySelector('#reset-game').addEventListener('click', () => {
  const answer = document.querySelector('#answer');
  let resultIndex = Math.round(Math.random() * 6);
  const balls = document.querySelectorAll('.ball');
  answer.innerText = 'Escolha uma cor';
  for (let i = 0; i < 6; i += 1) {
    const color = `${randomRGB()}`;
    balls.item(i).style.backgroundColor = `rgb${color}`;
    if (i === resultIndex) {
      rgbColor.innerText = color;
      resultIndex = `rgb${color}`;
    }
  }
});

window.onload = () => {
  let resultIndex = Math.round(Math.random() * 6);
  const balls = document.querySelectorAll('.ball');
  for (let i = 0; i < 6; i += 1) {
    const color = `${randomRGB()}`;
    balls.item(i).style.backgroundColor = `rgb${color}`;
    if (i === resultIndex) {
      rgbColor.innerText = color;
      resultIndex = `rgb${color}`;
    }
  }
};
