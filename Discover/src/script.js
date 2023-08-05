/**
 * Adiciona a classe "light" à tag `html` ou
 * a remove caso exista no elemento. Além disso,
 * essa função troca a imagem do avatar.
 *
 * @returns void
 */
function toogleMode() {
  const html = document.documentElement;
  const avatar = document.querySelector("#profile img");

  html.classList.toggle("light");
  html.classList.contains("light")
    ? avatar.setAttribute("src", "./assets/avatar-light.png")
    : avatar.setAttribute("src", "./assets/avatar-dark.png");
}
