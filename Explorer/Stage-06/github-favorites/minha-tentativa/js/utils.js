import { modalDialog } from "./Github/elements.js";

export function checkInput(githubUsername) {
  if (githubUsername === null) {
    modalDialog.toggleAttribute("open");
    return false;
  }
  return true;
}
