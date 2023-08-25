const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

const Modal = {
  toggle() {
    this.wrapper.classList.toggle("open");
  },
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  btnClose: document.querySelector(".modal button.close"),
};

Modal.btnClose.onclick = () => Modal.toggle();

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;
  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.toggle();
};

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
