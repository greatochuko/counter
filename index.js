const counterHtml = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
let counter = 0;

function renderCounterHtml() {
  if (counter > 0) {
    counterHtml.style.color = "green";
  } else if (counter < 0) {
    counterHtml.style.color = "red";
  } else {
    counterHtml.style.color = "darkgray";
  }
}

function increaseCounter() {
  counter++;
  counterHtml.innerHTML = counter;
  renderCounterHtml();
}

function decreaseCounter() {
  counter--;
  counterHtml.innerHTML = counter;
  renderCounterHtml();
}

function resetCounter() {
  counter = 0;
  counterHtml.innerHTML = counter;
  renderCounterHtml();
}

increaseBtn.addEventListener("click", increaseCounter);
decreaseBtn.addEventListener("click", decreaseCounter);
resetBtn.addEventListener("click", resetCounter);
