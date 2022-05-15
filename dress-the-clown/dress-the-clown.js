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
let imageCount = 6
let headIndex = 0
// console.log(head)

function changeClownHead(headIndex) {
  let headSrc = './images/head' + headIndex + '.png'
  console.log(headSrc)
  head.src = headSrc
}
