// function namaCok(namadepan, namabelakang){
//   console.log(namadepan, namabelakang)
// }

// namaCok('Syafiqurohman', 'ga punya nama belakang')

// //first way
// const sum1 = new Function('x', 'y', 'console.log(x + y)')
// sum1(2,3)

// //standar function

// function sum2(x, y){
//   console.log(x + y)
// }

// sum2(4, 10)

// // arrow function

// const sum3 = (x, y) => {
//   console.log(x + y)
// }

// sum3(23, 10)

//luas Lingkaran

// const phi = 3.14;

// const luasLingkaran = (r) => {
//   return phi * r * r;
// }

// let r = Number(prompt('Masukkan jari-jari lingkaran:'));
// Number(alert('Luas lingkaran:'+ luasLingkaran(r)));

// // //Luas Segitiga

// function luasSegitiga(a, t){
//   return 0.5 * a * t
// }

// let a = Number(prompt('Input alas segitiga :'))
// let t = Number(prompt('input tinggi segitiga:'))
// alert('luas segitiga:' + luasSegitiga(a, t))

// // //Luas Persegi Panjang

// const luasPersegiPanjang = (p, l) => {
//   return p * l
// }

// let p = Number(prompt('masukan tinggi persegi:'))
// let l = Number(prompt('masukan lebar persegi:'))

// alert('luas persegi panjang:' + luasPersegiPanjang(p, l))

// //Luas Jajargenjik

// function luasJajargenjik(al, ti){
//   return al * ti
// }

// let al = Number(prompt('Input alas Jajargenjik :'))
// let ti = Number(prompt('input tinggi Jajargenjik:'))
// alert('luas Jajargenjik:' + luasJajargenjik(al, ti))

let namaKaryawan = ["Syafiqurohman", "Adelia", "Lola Lolo"];
let hariMasuk = [25, 22, 20];  // Misalnya jumlah hari masuk kerja
let gajiPerHari = [260000, 220000, 250000];

const totalGaji = (hariMasuk, gajiPerHari) => {
  return hariMasuk * gajiPerHari
}

for (let i = 0; i < namaKaryawan.length; i++){
  console.log(`Gaji ${namaKaryawan[i]} Bulan Ini: `, totalGaji(hariMasuk[i], gajiPerHari[i])
  )}