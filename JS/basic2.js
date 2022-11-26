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

function undefinedFinder(penumpang) {
  let undefinedFinderIndex;

  for (let index = 0; index < penumpang.length; index++) {
    if (penumpang[index] === undefined) {
      console.log("Ini indexnya " + index);
      undefinedFinderIndex = index;
      return undefinedFinderIndex;
    }
  }
}

function tambahPenumpang(nama, penumpang) {
  let same = true;

  if (penumpang.length === 0) {
    penumpang.push(nama);
    return penumpang;
  } else {
    penumpang.find(function (namaCari) {
      if (nama === namaCari) {
        return (same = false);
      }
    });

    if (same) {
      let undefinedIndex;
      undefinedIndex = undefinedFinder(penumpang);
      console.log("Ini undefinedIndex: " + undefinedIndex);
      if (undefinedIndex !== undefined) {
        penumpang[undefinedIndex] = nama;
        return penumpang;
      } else {
        penumpang.push(nama);
        return penumpang;
      }
    }
  }
}

// var tambahPenumpang = function (namaPenumpang, arrPenumpang) {
//   if (penumpang.length === 0) {
//     penumpang.push(nama);
//     return penumpang;
//   } else {
//     for (let i = 0; i < penumpang.length; i++) {
//       if (penumpang[i] === undefined) {
//         penumpang[i] = namaPenumpang;
//         return penumpang;
//       } else if (i === penumpang.length + 1) {
//         penumpang.push(namaPenumpang);
//       }
//     }
//   }
// };

function hapusPenumpang(namaPenumpang, penumpang) {
  let sameIndex;

  if (penumpang.length === 0) {
    console.log("Angkot kosong!");
  } else {
    penumpang.find(function (namaCari, index) {
      if (namaPenumpang === namaCari) {
        return (sameIndex = index);
      }
    });
    if (sameIndex !== undefined) {
      penumpang[sameIndex] = undefined;
    } else {
      console.log("Namanya salah bos!");
    }
  }
}
tambahPenumpang("Bagong", penumpang);
hapusPenumpang("Kris", penumpang);
console.log(penumpang);
//ARRAY PROJECTS
