import state from "./state.js";
import { startTheme, stopTheme } from "./utils.js";
import { themes } from "./elements.js";

export function setTheme() {
  themes.addEventListener("click", (event) => {
    if (state.currentTheme === event.target.id && !state.isMute) {
      stopTheme(event.target.id);
    } else {
      stopTheme(state.currentTheme);
      startTheme(event.target.id);
    }
  });
}
