let count = 0;
let target = 100;

const countDisplay = document.getElementById("bisa-plis");
const addBtn = document.getElementById("plus");
const resetBtn = document.getElementById("reset");
const notification = document.getElementById("target-plis");

addBtn.addEventListener("click", function() {
  count++;
  countDisplay.textContent = count;

  if (count >= target) {
    notification.style.display = "block";
  }
});

resetBtn.addEventListener("click", function() {
  count = 0;
  countDisplay.textContent = count;
  notification.style.display = "none";
});