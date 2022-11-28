console.log(document);

//DOM SELECTION
const judul = document.getElementById("judul");
judul.style.color = "pink";
judul.style.backgroundColor = "black";
judul.innerHTML = "Halo Semuanya";
console.log(judul);

// const p = document.getElementsByTagName("p");
// for (let index = 0; index < p.length; index++) {
//   p[index].style.backgroundColor = "pink";
// }
// console.log(p);

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ini adalah judul yang baru";
console.log(h1);

//querySelector dapat seleksi serangkaian tag CSS
const p4 = document.querySelector("#b ul li");
p4.innerHTML = "Ganti paragaph";
console.log(p4);

//PERFORMA LEBIH BAIK
//getElementById()
//getElementByTagName()

//PERFORMA KURANG BAIK
//getElementByClassName()

//PERFORMA KURANG BAIK
//DIGUNAKAN KETIKA TIDAK PERLU MENGUBAH STRUKTUR HTML
//querySelector()
//querySelectorAll()

const sectionB = document.getElementById("b");
const p4ver2 = sectionB.getElementsByTagName("p")[0];
p4ver2.style.backgroundColor = "orange";
//DOM SELECTION
