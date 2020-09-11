const alphaSlider = document.querySelector('.alphaslider');
const alphaValueDisp = document.querySelector('.alphavalue');
const overlay = document.querySelector('.overlay');

let redValue = 0;
let greenValue = 0;
let blueValue = 0;
let alphaValue = 1;

overlay.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
alphaSlider.value = `${alphaValue}`;

alphaSlider.addEventListener('input', () => {
	alphaValue = alphaSlider.value;
	alphaValueDisp.innerHTML = `${alphaValue}`;
	overlay.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
}, false);
