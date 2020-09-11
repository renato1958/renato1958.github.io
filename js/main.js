const alphaSlider = document.querySelector('.alphaslider');
const alphaValueDisp = document.querySelector('.alphavalue');
const redSlider = document.querySelector('.redslider');
const redValueDisp = document.querySelector('.redvalue');
const greenSlider = document.querySelector('.greenslider');
const greenValueDisp = document.querySelector('.greenvalue');
const blueSlider = document.querySelector('.blueslider');
const blueValueDisp = document.querySelector('.bluevalue');

const overlay = document.querySelector('.overlay');

let redValue = 0;
let greenValue = 0;
let blueValue = 0;
let alphaValue = 1;

overlay.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;

alphaSlider.value = `${alphaValue}`;
alphaValueDisp.innerHTML = `${alphaValue}`;
redSlider.value = `${redValue}`;
redValueDisp.innerHTML = `${redValue}`;
greenSlider.value = `${greenValue}`;
greenValueDisp.innerHTML = `${greenValue}`;
blueSlider.value = `${blueValue}`;
blueValueDisp.innerHTML = `${blueValue}`;

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

greenSlider.addEventListener('input', () => {
        greenValue = greenSlider.value;
        greenValueDisp.innerHTML = `${greenValue}`;
        overlay.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
}, false);

blueSlider.addEventListener('input', () => {
        blueValue = blueSlider.value;
        blueValueDisp.innerHTML = `${bluetValue}`;
        overlay.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
}, false);

