import state from "./state.js";
import { buttons } from "./elements.js";
import * as sounds from "./sounds.js";

export function startTheme(themeName) {
  state.currentTheme = themeName;
  sounds[state.currentTheme].play();
  state.isMute = false;
  buttons[themeName].classList.toggle("active");
}

export function stopTheme(themeName) {
  if (state.currentTheme) {
    sounds[state.currentTheme].pause();
    state.isMute = true;
    state.currentTheme = null;
    buttons[themeName].classList.toggle("active");
  }
}
