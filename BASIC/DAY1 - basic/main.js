let saldoAwal = 50000000
let saldoSaya = Number(prompt('berapa uang anda?'))
const saldoAkhir = saldoAwal+saldoSaya
alert(`uang saya adalah Rp ${saldoAkhir}`)

let namaHari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
let hari = new Date().getDay()  
let indeksHari = hari === 0 ? 6 : hari - 1
alert(`hari ini adalah hari ${namaHari[indeksHari]}`)

let namaHari1 = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
let hari1 = new Date().getDay()  
alert(`hari ini adalah hari ${namaHari1[hari1]}`)