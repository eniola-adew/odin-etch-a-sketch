const container = document.querySelector('.container');
const createBtn = document.querySelector('#create-btn');

function createGrid(squarePerSide) {
  container.innerHTML = '';
  container.style.setProperty('--grid-columns', squarePerSide);
  let totalSquares = squarePerSide * squarePerSide;
  for (let i = 1; i <= totalSquares; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('grid-item');
    squareDiv.addEventListener('mouseenter', () => {
      squareDiv.classList.add('active');
    });
    container.appendChild(squareDiv);
  }
}

createGrid(16);

createBtn.addEventListener('click', () => {
  let userInput = prompt('How many squares per side? (Max 100)');
  let size = parseInt(userInput);

  if (size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert('Please enter a valid number between 1 and 100');
  }
});
