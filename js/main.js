const alphaSlider = document.querySelector('.alphaslider');
const redSlider = document.querySelector('.redslider');
const alphaValueDisp = document.querySelector('.alphavalue');
const redValueDisp = document.querySelector('.redvalue');

const overlay = document.querySelector('.overlay');

let redValue = 0;
let greenValue = 0;
let blueValue = 0;
let alphaValue = 1;

overlay.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
alphaSlider.value = `${alphaValue}`;
redSlider.value = `${redValue}`;

alphaSlider.addEventListener('input', () => {
	alphaValue = alphaSlider.value;
	alphaValueDisp.innerHTML = `${alphaValue}`;
	overlay.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
}, false);

redSlider.addEventListener('input', () => {
        redValue = redSlider.value;
        redValueDisp.innerHTML = `${redValue}`;
        overlay.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
}, false);


