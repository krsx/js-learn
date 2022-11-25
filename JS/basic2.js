// let random = Math.random() * 100;
// console.log(random);

//FUNCTION
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
//FUNCTION

// let a = parseInt(prompt("Nilai a"));
// let b = parseInt(prompt("Nilai b"));
// let test = tambahv2(10, 3, 40, 90);
// console.log(test);
// console.log(tambah(a, b));
// console.log(tambah(a, b, "hai", false));

//ARRAY
let angka = [1, 2, 3, 4, 5];
angka.forEach((element) => {
  console.log(element);
});

angka.forEach(function (e, i) {
  console.log("Mahaisiswa ke-" + i + " adalah " + e);
});

let angka2 = angka.map(function (e) {
  return e * 2;
});

console.log(angka2);

let randomAngka = [1, 0, 3, 4, 10, 3, 1];
randomAngka.sort(function (a, b) {
  // untuk dapat mengurutkan dengan baik ditambahkan fungsi yag langsung dijalankan (expression function)
  return a - b;
});
console.log(randomAngka);

let angkaFilter = randomAngka.filter(function (x) {
  return x > 5;
});
console.log(angkaFilter);

let angkaFinder = randomAngka.find(function (x) {
  return x > 2; //akan mengembalikan array yang sesuai dengan syarat pada return
});
console.log(angkaFinder);

//ARRAY

//ARRAY PROJECTS
let penumpang = ["Putri", undefined, "Krisna"];
let same = true;

penumpang.forEach(function (penumpang, index) {
  if (penumpang === undefined) {
    console.log("Ini indexnya " + index);
    return index;
  }
});

function tambahPenumpang(nama, penumpang) {
  if (penumpang.length === 0) {
    penumpang.push(nama);
  } else {
    penumpang.find(function (namaCari) {
      if (nama === namaCari) {
        return (same = false);
      }
    });

    if (same) {
      let undefinedIndex;
      penumpang.forEach(function (penumpang, index) {
        if (penumpang === undefined) {
          console.log("Ini indexnya " + index);
          undefinedIndex = index;
        }
      });

      if (undefinedIndex !== undefined) {
        penumpang[undefinedIndex] = nama;
      } else {
        penumpang.push(nama);
      }
    }
  }
}

tambahPenumpang("Iu", penumpang);

console.log(penumpang);
//ARRAY PROJECTS
