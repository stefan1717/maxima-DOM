const container = document.querySelector('.container');

for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    div.textContent = randomNumber;
    
    if (randomNumber < 31) {
        div.style.backgroundColor = 'green';
    } else if (randomNumber > 70) {
        div.style.backgroundColor = 'red';
    }
    
    container.appendChild(div);
}

function getRandomValue() {
  return Math.floor(Math.random() * 256);
}

function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(value => value.toString(16).padStart(2, '0')).join('');
}

function getColorName(r, g, b) {
  if (r > 200 && g < 100 && b < 100) return 'красный';
  if (r > 200 && g > 200 && b < 100) return 'желтый';
  if (r < 100 && g > 200 && b < 100) return 'зеленый';
  if (r < 100 && g > 200 && b > 200) return 'голубой';
  if (r < 100 && g < 100 && b > 200) return 'синий';
  if (r > 200 && g < 100 && b > 200) return 'розовый';
  if (r > 150 && g > 150 && b > 150) return 'белый';
  if (r < 50 && g < 50 && b < 50) return 'черный';
  return 'серый';
}

let r = getRandomValue();
let g = getRandomValue();
let b = getRandomValue();

let hexColor = rgbToHex(r, g, b);

let colorName = getColorName(r, g, b);

let brightness = (r * 299 + g * 587 + b * 114) / 1000;
let textColor = brightness > 125 ? 'black' : 'white';

let colorBox = document.getElementById('colorBox');
colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
colorBox.style.color = textColor;

colorBox.innerHTML = `
  <p>RGB: rgb(${r}, ${g}, ${b})</p>
  <p>HEX: ${hexColor}</p>
  <p>Оттенок: ${colorName}</p>
`;
