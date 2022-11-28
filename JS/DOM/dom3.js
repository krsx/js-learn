//DOM MANIPULATION (NODE)

const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");

pBaru.appendChild(teksPBaru);

const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru); //append untuk mausk section a

const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Ini Li Baru lho");
liBaru.appendChild(teksLiBaru);
const ul = document.querySelector("#b ul");
const li2 = ul.querySelector("li:nth-child(1)");

ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru!");
h2Baru.appendChild(teksH2Baru);

pBaru.style.backgroundColor = "lime";
h2Baru.style.backgroundColor = "lime";
liBaru.style.backgroundColor = "lime";

sectionB.replaceChild(h2Baru, p4); //replace node baru dan node lama
//DOM MANIPULATION (NODE)
