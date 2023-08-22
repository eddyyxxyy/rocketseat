let attempts = 0;
const randomValue = parseInt(Math.random() * 10);
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  attempts++;
  const main = document.querySelector("main");
  const formData = new FormData(form);
  const value = parseInt(formData.get("guess"));
  if (value !== randomValue) {
    if (!document.querySelector("span")) {
      const span = document.createElement("span");
      span.classList.add("error");
      span.innerText = "Errou! Tente novamente...";
      main.appendChild(span);
    }
  } else {
    const congratsP = document.createElement("p");
    const buttonPlayAgain = document.createElement("button");
    congratsP.innerText = `Acertou em ${attempts} tentativa(s)!`;
    buttonPlayAgain.innerText = "Jogar novamente";
    buttonPlayAgain.id = "play-again";
    buttonPlayAgain.addEventListener("click", () => {
      window.location.reload();
    });
    main.innerHTML = "";
    main.appendChild(congratsP);
    main.appendChild(buttonPlayAgain);
  }
});
