//EVENT LISTENER
const p2 = document.querySelector("#a .p2");
p2.addEventListener("click", function () {
  p2.style.backgroundColor = "red";
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const textLiBaru = document.createTextNode("Element li Baru");
  liBaru.append(textLiBaru);
  ul.append(liBaru);
});
//EVENT LISTENER
