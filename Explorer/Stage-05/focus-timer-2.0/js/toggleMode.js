import sounds from "./FocusTimer/sounds.js";

let darkMode = false;
const buttonToggle = document.getElementById("toggle-mode");

buttonToggle.addEventListener("click", (event) => {
  sounds.clickSound.currentTime = 0;
  sounds.clickSound.volume = 0.2;
  sounds.clickSound.play();
  document.documentElement.classList.toggle("dark");
  darkMode = !darkMode;
});
