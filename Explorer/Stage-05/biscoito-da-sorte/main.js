const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fortuneCookie = document.querySelector("#crackFortuneCookie");
const openAnother = document.querySelector("#openAnother");
const phrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Siga os bons e aprenda com eles.",
  "O bom-senso vale mais do que muito conhecimento.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "Uma bela flor é incompleta sem as suas folhas.",
  "Sem o fogo do entusiasmo, não há o calor da vitória.",
  "Os defeitos são mais fortes quando o amor é fraco.",
];

fortuneCookie.addEventListener("click", toggleScreen);
fortuneCookie.addEventListener("click", pickPhrase);
openAnother.addEventListener("click", toggleScreen);

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function pickPhrase() {
  screen2.querySelector("p").innerText =
    phrases[(phrases.length * Math.random()) | 0];
}
