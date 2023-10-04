// Menggunakan readline untuk input dari pengguna
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menentukan deskripsi nilai berdasarkan skor
function tentukanDeskripsiNilai(skor) {
  if (skor >= 80 && skor <= 100) {
    return 'A';
  } else if (skor >= 65 && skor < 80) {
    return 'B';
  } else if (skor >= 50 && skor < 65) {
    return 'C';
  } else if (skor >= 35 && skor < 50) {
    return 'D';
  } else if (skor >= 0 && skor < 35) {
    return 'E';
  } else {
    return 'Nilai Invalid';
  }
}

// Meminta pengguna untuk memasukkan nama dan nilai
rl.question('Masukkan nama siswa: ', (nama) => {
  rl.question('Masukkan nilai siswa: ', (nilai) => {
    // Konversi nilai ke tipe data number
    nilai = parseInt(nilai);

    // Memanggil fungsi untuk menentukan deskripsi nilai
    const deskripsiNilai = tentukanDeskripsiNilai(nilai);

    // Menampilkan hasil
    console.log(`Deskripsi nilai untuk siswa ${nama}: ${deskripsiNilai}`);

    // Menutup interface readline
    rl.close();
  });
});
