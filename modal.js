const modal = document.querySelector('.modal');
const trigger = document.querySelector('.trigger');
const closeButton = document.querySelector('.close-button');

function toggleModal() {
  modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

//likes dishes

const incrementCount = document.getElementById('increment-count');
const totalCount = document.getElementById('total-count');
var count = 0;
totalCount.innerHTML = count;
const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
};
incrementCount.addEventListener('click', handleIncrement);

const incrementCount2 = document.getElementById('increment-count2');
const totalCount2 = document.getElementById('total-count2');
var count2 = 0;
totalCount2.innerHTML = count2;
const handleIncrement2 = () => {
  count2++;
  totalCount2.innerHTML = count2;
};
incrementCount2.addEventListener('click', handleIncrement2);

const incrementCount3 = document.getElementById('increment-count3');
const totalCount3 = document.getElementById('total-count3');
var count3 = 0;
totalCount3.innerHTML = count3;
const handleIncrement3 = () => {
  count3++;
  totalCount3.innerHTML = count3;
};
incrementCount3.addEventListener('click', handleIncrement3);

const incrementCount4 = document.getElementById('increment-count4');
const totalCount4 = document.getElementById('total-count4');
var count4 = 0;
totalCount4.innerHTML = count4;
const handleIncrement4 = () => {
  count4++;
  totalCount4.innerHTML = count4;
};
incrementCount4.addEventListener('click', handleIncrement4);

//heart

const like = () => {
  if ((document.getElementById('up-arrow').style.display = 'block')) {
    document.getElementById('up-arrow2').style.display = 'block';
  } else {
    document.getElementById('up-arrow').style.display = 'block';
  }
};
