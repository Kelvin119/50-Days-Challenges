const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// for(const empty of empties){
//   empty.addEventListener('drag Over', dragOver)
//   empty.addEventListener('drag Enter', dragEnter)
//   empty.addEventListener('drag Leave', dragLeave)
//   empty.addEventListener('drag Drop', dragDrop)
// }

function dragStart() {
  console.log('drag Start');
}

function dragEnd() {
  console.log('drag End');
}

function dragOver() {
  console.log('drag Over');
}

function dragEnter() {
  console.log('drag Enter');
}

function dragLeave() {
  console.log('drag Leave');
}

function dragDrop() {
  console.log('drag Drop');
}
