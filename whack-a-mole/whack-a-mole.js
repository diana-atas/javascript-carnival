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

// -- 2D ARRAY -- //
for (let i = 0; i < grid.length; i++) {
  grid[i] = []
}

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid.length; j++) {
    grid[i][j] = h++
  }
}

console.log(grid)
