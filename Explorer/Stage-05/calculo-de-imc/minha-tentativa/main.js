const btnSubmit = document.querySelector("button[name=btnSubmit]");
const dialogErrorModal = document.querySelector(".modal-error");
const dialogResultModal = document.querySelector(".modal-result");
const IMCresult = document.querySelector(".modal-result-content");

btnSubmit.addEventListener("click", checkAndCalc);

function checkAndCalc() {
  const weightInput = document.querySelector("#weight").value;
  const heightInput = document.querySelector("#height").value;

  if (
    weightInput < 15 ||
    weightInput > 350 ||
    heightInput < 50 ||
    heightInput > 250
  ) {
    dialogErrorModal.open = true;
    setTimeout(() => {
      dialogErrorModal.open = false;
    }, 7800);
    return false;
  }

  calcIMC(weightInput, heightInput);
}

function calcIMC(weight, height) {
  const result = weight / ((height / 100) * (height / 100));
  IMCresult.querySelector("h2 span").innerText = result.toFixed(2);
  dialogResultModal.open = true;
}
