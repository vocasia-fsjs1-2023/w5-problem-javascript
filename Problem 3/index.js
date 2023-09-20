// Meminta pengajar memasukkan nama siswa dan nilai ujian
var nama = "Nasyikh Wafi Zakaria";
var nilai = 79;

// Validasi nilai ujian
var deskripsiNilai = "";

if (nilai < 0 || nilai > 100) {
    deskripsiNilai = "Nilai Invalid";
} else if (nilai >= 80) {
    deskripsiNilai = "A";
} else if (nilai >= 65) {
    deskripsiNilai = "B";
} else if (nilai >= 50) {
    deskripsiNilai = "C";
} else if (nilai >= 35) {
    deskripsiNilai = "D";
} else {
    deskripsiNilai = "E";
}

// Menampilkan deskripsi nilai dan nama siswa
console.log("Nama Siswa: " + nama);
console.log("Deskripsi Nilai: " + deskripsiNilai);