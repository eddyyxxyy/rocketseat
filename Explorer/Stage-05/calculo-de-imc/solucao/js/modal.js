export const Modal = {
  open() {
    this.wrapper.classList.add("open");
  },
  close() {
    this.wrapper.classList.remove("open");
  },
  isOpen() {
    return this.wrapper.classList.contains("open");
  },
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  btnClose: document.querySelector(".modal button.close"),
};

Modal.btnClose.onclick = () => Modal.close();

window.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  if (event.key === "Escape" && Modal.isOpen()) {
    Modal.close();
  }
}
