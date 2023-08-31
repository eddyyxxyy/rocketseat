import state from "./state.js";
import { controls } from "./elements.js";
import * as timer from "./timer.js";
import sounds from "./sounds.js";

controls.addEventListener("click", (event) => {
  sounds.clickSound.volume = 0.2;
  sounds.clickSound.play();
  switch (event.target.id) {
    case "play":
      timer.startTimer(state.minutes, state.seconds);
      break;
    case "pause":
      timer.pauseTimer();
      break;
    case "reset":
      timer.resetTimer();
      break;
    case "increment":
      timer.incrementByFive();
      break;
    case "decrement":
      timer.decrementByFive();
      break;
  }
});
