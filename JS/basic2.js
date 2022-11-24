// let random = Math.random() * 100;
// console.log(random);

//Function
function randomNumber() {
  return Math.random() * 100;
}

function tambah(a, b) {
  return a + b;
}

//arguments adalah default data yang ada dalam function JS
//dapat dikatakan sebagai pseudo variabels
function tambahv2() {
  let hasil = 0;
  for (let index = 0; index < arguments.length; index++) {
    hasil += arguments[index];
  }
  return hasil;
}
//Function

let a = parseInt(prompt("Nilai a"));
let b = parseInt(prompt("Nilai b"));
let test = tambahv2(10, 3, 40, 90);
console.log(test);
console.log(tambah(a, b));
console.log(tambah(a, b, "hai", false));
