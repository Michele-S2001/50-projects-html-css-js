/* EXPANDING CARDS */

const boxDomElements = document.querySelectorAll('.img-box');

let imgIndex = 0;

boxDomElements[imgIndex].classList.add('expand');

boxDomElements.forEach((box, i) => {
  box.addEventListener('click', () => {
    boxDomElements[imgIndex].classList.remove('expand');
    imgIndex = i;
    boxDomElements[imgIndex].classList.add('expand');
  })
})