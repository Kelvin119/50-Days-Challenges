const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

act1 = 3

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})