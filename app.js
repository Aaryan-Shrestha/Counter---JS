// METHOD FIRST:::::::::::::::::::::::::::::::::::::::::::::

// let count = document.querySelector("#value");
// const btnDecrease = document.querySelector(".decrease");
// const btnReset = document.querySelector(".reset");
// const btnIncrease = document.querySelector(".increase");

// btnDecrease.addEventListener("click", function () {
//   count.textContent--;
//   count.style.color = "red";
// });
// btnReset.addEventListener("click", function () {
//   count.textContent = 0;
//   count.style.color = "black";
// });
// btnIncrease.addEventListener("click", function () {
//   count.textContent++;
//   count.style.color = "green";
// });

// METHOD SECOND:::::::::::::::::::::::::::::::::::::::::::::

// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
