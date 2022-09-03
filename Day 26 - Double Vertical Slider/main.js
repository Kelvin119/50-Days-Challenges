const sliderContainer = document.querySelector('.slider-container')
const SlideLeft = document.querySelector('.left-slide')
const SlideRight = document.querySelector('.right-slide')
const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const slidesLength = SlideRight.querySelectorAll('div').length

let activeSlideIndex = 0

SlideLeft.getElementsByClassName.top = `${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1
    }
  }

  SlideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
  SlideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}