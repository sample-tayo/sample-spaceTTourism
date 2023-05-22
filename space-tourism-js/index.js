const ham = document.querySelector("#ham");
const close = document.querySelector("#close");
const nav = document.querySelector(".nav");

ham.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

close.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});
