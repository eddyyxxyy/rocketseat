import { AlertError } from "./AlertError.js";
import { notNumber, calculateIMC, displayResultMessage } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  if (notNumber(weight) || notNumber(height)) {
    AlertError.open();
    return false;
  }

  AlertError.close();

  const result = calculateIMC(weight, height);
  displayResultMessage(result);
});

inputHeight.oninput = () => AlertError.close();
inputWeight.oninput = () => AlertError.close();
