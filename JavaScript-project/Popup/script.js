//{}
const containerEl = document.querySelector(".container");
const btn = document.querySelector(".container button");
const popup = document.querySelector(".popup-container.active");
const closeIcon = document.querySelector(".close-icon");

btn.addEventListener("click", () => {
  popup.classList.remove("active");
  containerEl.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  popup.classList.add("active");
  containerEl.classList.remove("active");
});
