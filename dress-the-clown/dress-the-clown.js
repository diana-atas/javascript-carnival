// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// declare variable to reference head - head
// declare variable to reference body
// declare variable to reference shoes

// declare variable to store current number of the head image - headIndex
// create function changeClownHead to change head image of the clown
// use concat and headIndex to create new file path
// assign new image to variable head

// assign right arrow key to call function
// increase headIndex by one so next image is used when function is called again
// function should reset headIndex to zero once it reaches last image

// assign left arrow key to call function
// decrease headIndex by one so next image is used when function is called again
// function should reset headIndex to zero once it reaches last image

// declare variable to track which body part you are currently selecting - clothingIndex
// assign up and down arrow keys to increase and decrease clothingIndex
// refactor changeClownHead function to changeClothes function to change image for other body parts when respective clothingIndex is selected

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')
let imageCount = 6
let clothingCount = 3
let headIndex = 0
let clothingIndex = 0
// console.log(head)

function changeClownHead(headIndex) {
  let headSrc = './images/head' + headIndex + '.png'
  console.log(headSrc)
  head.src = headSrc
}

document.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'ArrowRight':
      console.log('arrow right')
      if (headIndex >= imageCount) {
        headIndex = 0
      }
      changeClownHead(headIndex)
      headIndex++
      break
    case 'ArrowLeft':
      console.log('arrow left')
      if (headIndex <= 0) {
        headIndex = imageCount - 1
      }
      changeClownHead(headIndex)
      headIndex--
      break
    case 'ArrowUp':
      console.log('arrow up')
      if (clothingIndex >= clothingCount - 1) {
        clothingIndex = 0
      } else {
        clothingIndex++
      }
      console.log('clothing index = ' + clothingIndex)
      break
    case 'ArrowDown':
      console.log('arrow down')
      if (clothingIndex <= 0) {
        clothingIndex = clothingCount - 1
      } else {
        clothingIndex--
      }
      console.log('clothing index = ' + clothingIndex)
      break
  }
})
