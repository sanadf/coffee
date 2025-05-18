const button = document.querySelector('.hero button');

let scaleUp = true;

setInterval(() => {
  const style = window.getComputedStyle(button);
  const matrix = style.transform;

  // Extract scaleX from matrix
  let currentScale = 1;
  if (matrix && matrix !== 'none') {
    const values = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
    currentScale = parseFloat(values[0]);
  }

  if (scaleUp) {
    currentScale += 0.01;
    if (currentScale >= 1.1) scaleUp = false;
  } else {
    currentScale -= 0.01;
    if (currentScale <= 1) scaleUp = true;
  }

  button.style.transform = `scale(${currentScale})`;
}, 30);
