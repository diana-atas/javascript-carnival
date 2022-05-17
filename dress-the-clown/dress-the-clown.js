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
let imageCount = 7 // number of images per part
let clothes = ['head', 'body', 'shoes']
let clothingCount = clothes.length // number of parts, 3
// let headIndex = 0
let clothingIndex = 0 // index per part, 3
let clothesIndex = 0 // index per image per part, 6
// console.log(head)

// function changeClownHead(headIndex) {
//   let headSrc = './images/head' + headIndex + '.png'
//   console.log(headSrc)
//   head.src = headSrc
// }

function changeClothes(clothesIndex, clothingIndex) {
  let folder = './images/'
  let part = ''
  let fileExtension = '.png'
  for (let i = 0; i < clothingCount; i++) {
    console.log(i)
    if (clothingIndex == i) {
      part = clothes[i]
      console.log('if = ' + part)
    }
  }

  // let clothesSrc = './images/' + part + clothesIndex + '.png'
  let clothesSrc = folder.concat(part, clothesIndex, fileExtension)
  console.log(clothesSrc)
  if (part == 'head') {
    head.src = clothesSrc
  } else if (part == 'body') {
    body.src = clothesSrc
  } else if (part == 'shoes') {
    shoes.src = clothesSrc
  }

  console.log(head.src)
}

// changeClothes(clothesIndex)
document.addEventListener('keydown', function (e) {
  switch (e.key) {
    // case 'ArrowRight':
    //   console.log('arrow right')
    //   if (headIndex >= imageCount) {
    //     headIndex = 0
    //   }
    //   changeClownHead(headIndex)
    //   headIndex++
    //   break
    // case 'ArrowLeft':
    //   console.log('arrow left')
    //   if (headIndex <= 0) {
    //     headIndex = imageCount - 1
    //   }
    //   changeClownHead(headIndex)
    //   headIndex--
    //   break

    case 'ArrowRight':
      console.log('arrow right')
      if (clothesIndex >= imageCount) {
        clothesIndex = 0
      }
      changeClothes(clothesIndex, clothingIndex)
      clothesIndex++
      break
    case 'ArrowLeft':
      console.log('arrow left')
      if (clothesIndex <= 0) {
        clothesIndex = imageCount - 1
      }
      changeClothes(clothesIndex, clothingIndex)
      clothesIndex--
      break
    case 'ArrowDown':
      console.log('arrow up')
      if (clothingIndex >= clothingCount - 1) {
        clothingIndex = 0
      } else {
        clothingIndex++
      }
      console.log('clothing index = ' + clothingIndex)
      break
    case 'ArrowUp':
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
