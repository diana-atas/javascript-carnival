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
let scoreCount = 0
let highScore = 0
let moleImage = document.getElementById('mole')
let cell = document.getElementsByTagName('TD')[0].appendChild(moleImage)
let randomCell
let lastRandom = 0

function startGame() {
  showMole()
  let count = 10
  let interval = setInterval(function () {
    document.getElementById('count').innerHTML = 'Time left: ' + count
    count--
    if (count === 0) {
      clearInterval(interval)
      document.getElementById('count').innerHTML = 'Game over.'

      if (scoreCount > highScore) {
        highScore = scoreCount
        alert(`New high score! Your score: ${scoreCount}`)
        document.getElementById('highScore').innerHTML =
          'High score: ' + highScore
      } else {
        alert(`Game over! Your score: ${scoreCount}`)
      }
      scoreCount = 0
      document.getElementById('score').innerHTML = 'Score: ' + scoreCount
    }
  }, 1000)
}

// moleImage.onclick = setTimeout(gameTimer, 10000)
// cell.addEventListener('click', startGame)

function showMole() {
  lastRandom = randomCell
  console.log('lastRandom = ' + lastRandom)
  randomCell = getRandomInt(0, cellCount - 1)
  console.log('randomCell = ' + randomCell)
  if (randomCell == lastRandom) {
    randomCell = getRandomInt(0, cellCount - 1)
    console.log('you got a duplicate random number!')
  }
  cells[randomCell].appendChild(moleImage)
  moleImage.onclick = whackedMole
}

function whackedMole(e) {
  let cell = e.target
  console.log('you clicked the mole')
  let moleSound = new Audio('whack-audio.wav')
  moleSound.play()
  scoreCount++
  document.getElementById('score').innerHTML = 'Score: ' + scoreCount
  console.log(score)
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
