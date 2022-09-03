const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++

  if (currentActive > circles.length) {
    currentActive = circles.length
  }

  update()
})

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update () {
  circles.forEach((circle, idx) => {
    // initially
    // the currentActive starts from 1 and end in 4
    // the idx starts from 0 and end in 3.
    // when next is clicked the currentActive becomes 2
    //  a loop through each of the idx in the circles (forEach) 
    // wherever the idx is less than the current Active the actice-class is added
    // the opposite is true for prev 

    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')
  // line 44: actives.length, we had to get the Number of active 

  progress.style.width = ((actives.length - 1)/(circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length){
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}