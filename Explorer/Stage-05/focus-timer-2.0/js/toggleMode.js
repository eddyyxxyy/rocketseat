let darkMode = false;
const buttonToggle = document.getElementById("toggle-mode");

buttonToggle.addEventListener("click", (event) => {
  document.documentElement.classList.toggle("dark");
  darkMode = !darkMode;
});
