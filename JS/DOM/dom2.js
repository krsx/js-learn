//DOM MANIPULATION (HTML COLLECTION)
const judul = document.getElementById("judul");
judul.innerHTML = "<i>Krisna Erlangga</i>";
// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "Hello";

judul.style.color = "red";
judul.style.backgroundColor = "black";

const judul2 = document.getElementsByTagName("h1")[0];

//menambahkan atribut name="Krisna Erlangga"
judul.setAttribute("name", "Krisna Erlangga");
const a = document.querySelector("section#a a");
let href = a.getAttribute("href");

//menambahkan atribut id="link"
let setAttribute = a.setAttribute("id", "link");

// a.removeAttribute("href");

const p2 = document.querySelector(".p2");
// p2.setAttribute("class", "label"); //nantinya akan menimpa class yang ada pada tag

p2.classList.add("label");
// p2.classList.remove("label");
p2.classList.toggle("biru-muda"); //otomatis akan menambahkan apabila tidak ada kelas
console.log(href);
p2.classList.item(2); //mengembalikan nama kelas yang termasuk
p2.classList.contains("biru-muda"); //mengembalikan tag class yang ada
// p2.classList.toggle("biru-muda"); //otomatis akan menghilangkan apabila ada kelas tersebut
//DOM MANIPULATION (HTML COLLECTION)
