let currentIndex = 1
displaySlides(currentIndex)

function displaySlides(num) {
  let slides = document.getElementsByClassName("imgSlide")
  if (num > slides.length) { currentIndex = 1 }
  if (num < 1) { currentIndex = slides.length }
  for (let slide of slides) {
    slide.style.display = "none"
  }
  slides[currentIndex - 1].style.display = "block"
}
function setSlides(num) {
  displaySlides(currentIndex += num)
}