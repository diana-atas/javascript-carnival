// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// put TD in array
// create function to get a random number
// create function to use random number to pick random cell in array
// put the mole in the random cell

// create function called whackedMole
// use onclick method to remove mole from current cell
// add mole to a new random cell

// add sound effect when mole is clicked

// let grid = new Array(5)
let cellCount = 25
let cells = document.getElementsByTagName('TD')

console.log(cells)

function showMole() {
  let randomCell = getRandomInt(0, cellCount - 1)
  let cell = document.getElementsByTagName('TD')[randomCell]
  let moleImage = document.getElementById('mole')
  cell.appendChild(moleImage)
  moleImage.onclick = whackedMole

  console.log(randomCell)
  // let currentText = document.createTextNode('random cell')
  // cell.appendChild(currentText)
}

showMole()

function whackedMole(e) {
  let cell = e.target
  console.log('you clicked the mole')
  let moleSound = new Audio('whack-audio.wav')
  moleSound.play()
  showMole()
}

// console.log(grid)
// console.log(randomCell)

// -- GET RANDOM INT -- //
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
