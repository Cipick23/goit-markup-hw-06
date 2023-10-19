let counterValue = 0;

const counterValueElement = document.getElementById('counterValue');

function updateCounterValue() {
  counterValueElement.textContent = counterValue;
}

const increaseBtn = document.getElementById('increaseBtn');

increaseBtn.addEventListener('click', () => {
  counterValue += 1;
  updateCounterValue();
});

const decreaseBtn = document.getElementById('decreaseBtn');
decreaseBtn.addEventListener('click', () => {
  counterValue -= 1;
  updateCounterValue();
});