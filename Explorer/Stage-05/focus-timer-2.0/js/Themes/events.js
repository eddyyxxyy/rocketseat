import state from "./state.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

export function setTheme() {
  el.themes.addEventListener("click", (event) => {
    if (state.theme != event.target.id) {
      sounds[state.theme].pause();
    }
    for (const button in el.buttons) {
      if (state.theme != event.target.id) {
        console.log(el.buttons[button]);
      }
    }
    state.theme = event.target.id;
    sounds[state.theme].play();
    event.target.classList.toggle("active");
  });
}
