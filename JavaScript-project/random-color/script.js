//{}
const hexColor = "0123456789ABCDEF";
const body = document.querySelector("body");
const colorInf = document.querySelector(".hexColor");

const generatorColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexColor[Math.floor(Math.random() * hexColor.length)];
  }
  return color;
};

const getColor = () => {
  let color = generatorColor();
  body.style.backgroundColor = color;
  colorInf.innerHTML = color;
  colorInf.style.color = color;
};
