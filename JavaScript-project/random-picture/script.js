//{}
const foxContainer = document.querySelector("#imgcontainer");
foxImg = async () => {
  fetch("https://randomfox.ca/floof/")
    .then((res) => res.json())
    .then((data) => {
      foxContainer.src = data.image;
    })
    .catch(() => {
      document.querySelector(".error").innerHTML = "Problem loading data";
    });
};

foxImg();
