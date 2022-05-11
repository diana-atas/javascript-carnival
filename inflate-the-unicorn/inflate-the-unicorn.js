// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorns = document.getElementsByTagName('img')
let isInflated = false
// let stages = ["unicorn0", "unicorn1", "unicorn2", "unicorn3"]

let unicorn0 = './images/unicorn-0.png'
let unicorn1 = './images/unicorn-1.png'
let unicorn2 = './images/unicorn-2.png'
let unicorn3 = './images/unicorn-3.png'

// function to inflate the unicorn
function inflateUnicorn(e) {
  let unicorn = e.target
  let currentState = unicorn.getAttribute('src')
  let currentUnicorn = unicorn.getAttribute('id')
  // console.log('you clicked me' + currentUnicorn)

  // create variable for clicked unicorn
  // if current unicorn image is 0 (check img src)
  // change img src to 1
  // if current unicorn image is 1 (check img src)
  // change img src to 2
  // if current unicorn image is 2 (check img src)
  // change img src to 3
  // if current unicorn image is 3 (check img src)
  // pop up alert "Unicorn Number 'x' says thank you!"

  switch (currentState) {
    case unicorn0:
      unicorn.src = unicorn1
      break
    case unicorn1:
      unicorn.src = unicorn2
      break
    case unicorn2:
      unicorn.src = unicorn3
      break
    default:
      isInflated = true
      console.log('default')
  }

  if (isInflated && currentUnicorn == 'firstUnicorn') {
    alert('Unicorn Number 1 says thank you!')
    isInflated = false
  } else if (isInflated && currentUnicorn == 'secondUnicorn') {
    alert('Unicorn Number 2 says thank you!')
    isInflated = false
  } else if (isInflated && currentUnicorn == 'thirdUnicorn') {
    alert('Unicorn Number 3 says thank you!')
    isInflated = false
  }
}

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = inflateUnicorn
}
