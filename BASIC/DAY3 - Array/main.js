// const myArray = [
//   "🍕",
//   "7",
//   {
//     potato: function () {
//       console.log("ini kentang");
//     },
//   },
//   ["eat"],
// ];

// console.log(myArray[2].potato);
// myArray[2].potato()

const dataKaryawan = [
  { nama: "Andi", umur: 30, posisi: "Manajer" },
  { nama: "Budi", umur: 25, posisi: "Pengembang Perangkat Lunak" },
  { nama: "Cindy", umur: 28, posisi: "Desainer Grafis" },
  { nama: "Dewi", umur: 35, posisi: "Analisis Data" },
];

dataKaryawan
  .sort((a, b) => a.umur - b.umur)
  .filter((x) => x.umur >= 28)
  .map((values) => console.log(values));
