const randomValue = parseInt(Math.random() * 10);
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const value = formData.get("guess");
});
