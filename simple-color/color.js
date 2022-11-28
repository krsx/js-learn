const buttonChangeColor = document.getElementById("button-change-color");
// const body = document.getElementsByTagName("body")[0];
buttonChangeColor.addEventListener("click", function () {
  //   document.body.style.backgroundColor = "pink";
  document.body.classList.toggle("pink-background-color");
});
