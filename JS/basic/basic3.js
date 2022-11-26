// OBJECT START

// let mahasiswa = {
//   nama: "Mahasiswa",
//   lulus: true,
//   IPSemeseter: [2.9, 3.1, 3.25],
//   IPKumulatif: function () {
//     let total = 0;
//     let ips = this.IPSemeseter;
//     for (let i = 0; i < ips.length; i++) {
//       total += ips[i];
//     }
//     return total / ips.length;
//   },
//   alamat: {
//     jalan: "Jl. Tukad Pancoran No. 20 C",
//     kota: "Denpasar",
//     pulau: "Bali",
//   },
// };

// function createMahasiswa(nama, nrp, email, jurusan) {
//   let mhs = {};
//   mhs.nama = nama;
//   mhs.nrp = nrp;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs;
// }

//nantinya nilai this akan otomatis berbentuk dalam suatu object
//otomatis juga akan me-return nilai this itu sendiri
//LEBIH REKOMENDASI UNTUK DIGIUNAKAN!
// class Mahasiswa {
//   constructor(nama, nrp, email, jurusan) {
//     this.nama = nama;
//     this.nrp = nrp;
//     this.email = email;
//     this.jurusan = jurusan;
//   }
// }
//LEBIH REKOMENDASI UNTUK DIGIUNAKAN!

// let mahasiswaLain = createMahasiswa(
//   "Krisna",
//   "5024201055",
//   "krisnaerlangga08@gmail",
//   "Teknik Kompurter"
// );

// perlu pakai new karena biar tau objek akan dibuat yang baru
// let mahasiswaLainLagi = new Mahasiswa(
//   "Krisna",
//   "5024201055",
//   "krisnaerlangga08@gmail",
//   "Teknik Kompurter"
// );

// console.log(mahasiswa.IPKumulatif);
// console.log(mahasiswa.IPSemeseter[2]);
// console.log(mahasiswaLain);
// console.log(mahasiswaLainLagi);
class Angkot {
  constructor(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang) {
      this.penumpang.push(namaPenumpang);
      return penumpang;
    };

    this.penumpangTurun = function (namaPenumpang, bayar) {
      if (this.penumpang.length === 0) {
        alert("Angkot masing kosong!");
        return false;
      }

      for (let index = 0; index < penumpang.length; index++) {
        if (this.penumpang[index] === namaPenumpang) {
          this.penumpang[index] = undefined;
          this.kas += bayar;
          return this.penumpang;
        }
      }
    };
  }
}

let angkot1 = new Angkot("Krisna", ["Denpasar", "Badung"], [], 0);
angkot1.penumpangNaik("Krisna");
angkot1.penumpangNaik("Putri");
angkot1.penumpangTurun("Putri", 1000);
angkot1.penumpangTurun("Krisna", 5000);

console.log(angkot1);
// OBJECT END
