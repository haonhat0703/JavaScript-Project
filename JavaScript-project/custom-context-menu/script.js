const menuel = document.querySelector(".menu-list");
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  menuel.style.top = e.pageY + "px";
  menuel.style.left = e.pageX + "px";
  menuel.style.display = "block";
});

document.addEventListener("click", (e) => {
  if (!menuel.contains(e.target)) {
    menuel.style.display = "none";
  }
});
