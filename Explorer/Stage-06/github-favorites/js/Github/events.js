import GithubUser from "./GithubUser.js";
import { checkInput } from "../utils.js";
import {
  searchInput,
  searchButton,
  closeModal,
  modalDialog,
} from "./elements.js";

searchInput.addEventListener("keydown", (event) => {
  event.key === "Enter" ? searchButton.click() : "";
});

searchButton.addEventListener("click", () => {
  const githubUsername = searchInput.value ? searchInput.value : null;
  if (checkInput(githubUsername)) {
    const githubUser = GithubUser.getUser(githubUsername);
  }
});

closeModal.addEventListener("click", () => {
  modalDialog.toggleAttribute("open");
});
