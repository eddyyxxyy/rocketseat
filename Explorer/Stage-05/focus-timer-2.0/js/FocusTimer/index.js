import state from "./state.js";
import * as timer from "./timer.js";

export default function initializeTimer(minutes, seconds) {
  state.minutes = minutes ?? state.minutes;
  state.seconds = seconds ?? state.seconds;
  timer.updateDisplay();
}
