export const Modal = {
  toggle() {
    this.wrapper.classList.toggle("open");
  },
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  btnClose: document.querySelector(".modal button.close"),
};

Modal.btnClose.onclick = () => Modal.toggle();
