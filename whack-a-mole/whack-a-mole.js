// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// declare 2D array consisting 25 cells, 5 rows 5 columns

// 0: (5) [0, 1, 2, 3, 4]
// 1: (5) [5, 6, 7, 8, 9]
// 2: (5) [10, 11, 12, 13, 14]
// 3: (5) [15, 16, 17, 18, 19]
// 4: (5) [20, 21, 22, 23, 24]

// create function to get a random number
// create function to use random number to pick random cell in 2D array
// put the mole in the random cell

// create function called whackedMole
// use onclick method to remove mole from current cell
// add mole to a new random cell

// add sound effect when mole is clicked

let grid = new Array(5)
let h = 0
let cells = document.getElementsByTagName('TD')

// -- 2D ARRAY -- //
for (let i = 0; i < grid.length; i++) {
  cells[i] = []
}

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid.length; j++) {
    cells[i][j] = h++
  }
}

console.log(cells)

function showMole() {
  let randomCell = getRandomInt(0, h - 1)
  let cell = document.getElementsByTagName('TD')[randomCell]
  let moleImage = document.getElementById('mole')
  moleImage.src = 'mole.PNG'
  cell.appendChild(moleImage)
  moleImage.onclick = whackedMole

  console.log(randomCell)
  // let currentText = document.createTextNode('random cell')
  // cell.appendChild(currentText)
}

showMole()
// console.log('cell.moleImage: ' + cell.moleImage)

function whackedMole(e) {
  let cell = e.target
  console.log('you clicked the mole')
  showMole()
}

// activeMole.onclick = whackedMole

// console.log('h: ' + h)
// console.log(grid)
// console.log(randomCell)

// -- GET RANDOM INT -- //
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
