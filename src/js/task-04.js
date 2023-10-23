let counterValue = 0;

const valueElement = document.getElementById('value');
const buttons = document.querySelectorAll('button[data-action]');

function updateCounterValue() {
  valueElement.textContent = counterValue;
}

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const action = event.target.dataset.action;

    if (action === 'decrement') {
      counterValue -= 1;
    } else if (action === 'increment') {
      counterValue += 1;
    }

    updateCounterValue();
  });
});

updateCounterValue();

