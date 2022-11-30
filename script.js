'use strict';
//hamburger menu

const hamMenu = document.querySelector('.hamburger-menu');
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
});

//like diches
let n = 0;
const like = () => {
  if (n > 0) {
    document.write('<img src="./img/heart1.png">');
  }
};

//diches
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  });
});

//gallery
