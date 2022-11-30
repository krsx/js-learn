const buttonChangeColor = document.getElementById("button-change-color");
// const body = document.getElementsByTagName("body")[0];
buttonChangeColor.addEventListener("click", function () {
  //   document.body.style.backgroundColor = "pink";
  document.body.classList.toggle("pink-background-color");
});

const randomButton = document.createElement("button");
const randomButtonText = document.createTextNode("Random Color");
randomButton.append(randomButtonText);
randomButton.setAttribute("type", "button");
buttonChangeColor.after(randomButton);

randomButton.addEventListener("click", function () {
  const randomR = Math.round(Math.random() * 255 + 1);
  const randomG = Math.round(Math.random() * 255 + 1);
  const randomB = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor =
    "rgb(" + randomR + "," + randomG + "," + randomB + ")";
});

const slider = document.querySelector("input[name=sliderRed]");

slider.addEventListener("input", function () {
  const valueR = (slider.value / 100) * 255;
  console.log(valueR);
  document.body.style.backgroundColor =
    "rgb(" + valueR + "," + 100 + "," + 100 + ")";
});

document.body.addEventListener("mousemove", function (e) {
  // e.clientX
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  console.log(xPos);
  const yPos = Math.round((e.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor =
    "rgb(" + xPos + "," + yPos + "," + 100 + ")";
});
