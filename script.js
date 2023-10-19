const MAX_NUMBER = 15;
const MIN_NUMBER = 0;
const STEP_AMOUNT = 5;

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const resetButton = document.querySelector('[data-key="reset"]');
const confirmationMessage = document.getElementById('confirmation-message');


const subtractHandler = () => {
  const newValue = parseInt(number.value) - STEP_AMOUNT;
  number.value = newValue;

  if (add.disabled === true) {
    add.disabled = false;
  }

  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }
};

const addHandler = () => {
  const newValue = parseInt(number.value) + STEP_AMOUNT;
  number.value = newValue;

  if (subtract.disabled === true) {
    subtract.disabled = false;
  }

  if (newValue >= MAX_NUMBER) {
    add.disabled = true;
  }
};

const resetCounter = () => {
  number.value = MIN_NUMBER;
  subtract.disabled = true;
  add.disabled = false;
  confirmationMessage.style.display = 'block';
  setTimeout(() => {
    confirmationMessage.style.display = 'none';
  }, 2000);
};

subtract.addEventListener("click", subtractHandler);
add.addEventListener("click", addHandler);
resetButton.addEventListener("click", resetCounter);
