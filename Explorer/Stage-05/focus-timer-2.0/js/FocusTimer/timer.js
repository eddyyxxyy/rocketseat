import "./events.js";
import state from "./state.js";
import {
  minutes as currentMinutes,
  seconds as currentSeconds,
} from "./elements.js";
import sounds from "./sounds.js";

export function startTimer(minutes, seconds) {
  state.minutes = minutes ?? currentMinutes.textContent;
  state.seconds = seconds ?? currentSeconds.textContent;
  state.isRunning = true;
  document.documentElement.classList.add("running");
  countdown();
}

export function pauseTimer() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
}

export function resetTimer() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  updateDisplay();
}

export function incrementByFive() {
  if (Number(currentMinutes.textContent) <= 55) {
    updateDisplay(
      Number(currentMinutes.textContent) + 5,
      currentSeconds.textContent
    );
  }
}

export function decrementByFive() {
  if (Number(currentMinutes.textContent) > 5) {
    updateDisplay(
      Number(currentMinutes.textContent) - 5,
      currentSeconds.textContent
    );
  }
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  currentMinutes.textContent = String(minutes).padStart(2, 0);
  currentSeconds.textContent = String(seconds).padStart(2, 0);
}

export function countdown() {
  if (!state.isRunning) {
    return;
  }

  let minutes = Number(currentMinutes.textContent);
  let seconds = Number(currentSeconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    sounds.endSound.volume = 0.3;
    sounds.endSound.play();
    resetTimer();
    return;
  }

  updateDisplay(minutes, seconds);

  setTimeout(() => countdown(), 1000);
}
