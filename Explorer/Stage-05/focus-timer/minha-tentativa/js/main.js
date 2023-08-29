const body = document.querySelector("body");
const toggleMode = document.querySelector("#toggle-mode");
const form = document.querySelector("form");
const inputMinutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds-wrapper span");
const startPauseButton = document.querySelector("#start-pause-button");
const startPauseIcon = document.querySelector("#start-pause-icon");
let interval;

toggleMode.addEventListener("click", () => {
  body.classList.toggle("light");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearInterval(interval);
  const minutes = parseInt(inputMinutes.value);
  const endTime = Date.now() + minutes * 60 * 1000;

  interval = setInterval(() => {
    const timeRemaining = endTime - Date.now();

    if (timeRemaining <= 0) {
      clearInterval(interval);
      inputMinutes.value = "00";
      seconds.textContent = "00";
      return;
    }

    let minutesRemaining = parseInt((timeRemaining / 60) * 1000);
    let secondsRemaining = parseInt((timeRemaining % (60 * 1000)) / 1000);

    inputMinutes.value = minutesRemaining;
    seconds.textContent =
      secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining;
  }, 1000);
});

inputMinutes.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

inputMinutes.addEventListener("change", function () {
  if (this.value > 60) {
    this.value = 60;
  } else if (this.value < 1) {
    this.value = "01";
  } else if (this.value >= 1 && this.value <= 9) {
    this.value = `0${this.value}`;
  }
});

startPauseButton.addEventListener("click", () => {
  let urlPlay = "./assets/svg/play-circle.svg";
  let urlPause = "./assets/svg/pause-circle.svg";

  if (startPauseIcon.getAttribute("src") === urlPlay) {
    startPauseIcon.src = urlPause;
  } else {
    clearInterval(interval);
    startPauseIcon.src = urlPlay;
  }
});
