const container = document.querySelector('.container');
const createBtn = document.querySelector('#create-btn');

// create new grid based on user preferences
function createGrid(squarePerSide) {
  container.innerHTML = '';
  container.style.setProperty('--grid-columns', squarePerSide);
  let totalSquares = squarePerSide * squarePerSide;
  for (let i = 1; i <= totalSquares; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('grid-item');
    squareDiv.addEventListener('mouseenter', () => {
      squareDiv.style.backgroundColor = getRandomColor();
    });
    container.appendChild(squareDiv);
  }
}

createGrid(16); // create initial grid

// action button to create new grid
createBtn.addEventListener('click', () => {
  let userInput = prompt('How many squares per side? (Max 100)');
  let size = parseInt(userInput);

  if (size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert('Please enter a valid number between 1 and 100');
  }
});

// randomize rgb color

function getRandomColor() {
  let randomR = Math.floor(Math.random() * 256);
  let randomG = Math.floor(Math.random() * 256);
  let randomB = Math.floor(Math.random() * 256);
  return `rgb(${randomR}, ${randomG}, ${randomB})`;
}
