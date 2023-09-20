var nama = 'Anita';
var nilai = 100;

// Mengecek apakah nilai valid
if (nilai < 0 || nilai > 100 || isNaN(nilai)) {
    console.log("Nilai Invalid");
} else {
    
// Menentukan nilai ujian berdasarkan rentang nilai
let nilaiujian = "";
if (nilai >= 80 && nilai <= 100) {
    nilaiujian = "A";
} else if (nilai >= 65 && nilai < 80) {
    nilaiujian = "B";
} else if (nilai >= 50 && nilai < 65) {
    nilaiujian = "C";
} else if (nilai >= 35 && nilai < 50) {
    nilaiujian = "D";
} else {
    nilaiujian = "E";
}

// Menampilkan nilai ujian dan nama mahasiswa
console.log(`Nilai Ujian ${nama} adalah : ${nilai} (${nilaiujian})`);
}
