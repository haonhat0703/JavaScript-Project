const generateQR = () => {
  document.getElementById("qr-image").style.display = "block";
  let QRtext = document.getElementById("text").value;
  if (QRtext.trim().length == 0) {
    document.querySelector("#qr-image .error").innerHTML = "Please enter text";
    document.querySelector("#img").style.display = "none";
  } else {
    document.querySelector("#qr-image .error").innerHTML = "";
    document.querySelector("#img").style.display = "block";
    document.querySelector("#img").src =
      "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" + QRtext;
  }
};
