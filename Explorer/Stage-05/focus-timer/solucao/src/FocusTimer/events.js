import * as el from "./elements.js";
import * as actions from "./actions.js";
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
  el.controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] != "function") {
      return;
    }

    actions[action]();
  });
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  });
  el.minutes.addEventListener("keypress", (event) => {
    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }
  });
  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent;
    time = time > 60 ? "60" : time || time < 1 ? "1" : time;

    state.minutes = time;
    state.seconds = 0;

    updateDisplay();
    el.minutes.removeAttribute("contenteditable");
  });
}
