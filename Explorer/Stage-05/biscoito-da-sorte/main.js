const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fortuneCookie = document.querySelector("#crackFortuneCookie");
const openAnother = document.querySelector("#openAnother");

fortuneCookie.addEventListener("click", toggleScreen);
openAnother.addEventListener("click", toggleScreen);

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
