import state from "./state.js";
import * as themes from "./events.js";

export default function ChooseTheme(theme) {
  state.theme = theme ?? state.theme;
  themes.setTheme();
}
