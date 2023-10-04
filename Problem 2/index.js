// Mengganti variabel di bawah sesuai dengan informasi pengunjung
const name = "John"; // Ganti dengan nama pengunjung
const age = 20; // Ganti dengan usia pengunjung
const money = 350000; // Ganti dengan jumlah uang pengunjung

// Kondisi 1: Cek apakah nama pengunjung kosong
if (name === "") {
  console.log("Anda tidak boleh masuk!");
} else {
  // Kondisi 2: Cek usia pengunjung
  if (age < 17) {
    // Pengunjung berusia di bawah 17 tahun hanya bisa memesan juice
    const juicePrice = 50000;
    if (money < juicePrice) {
      console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
      const remainingMoney = money - juicePrice;
      console.log(`Anda bisa pesan minuman. Sisa uang anda: ${remainingMoney}`);
    }
  } else {
    // Pengunjung berusia 17 tahun ke atas hanya bisa memesan anggur
    const winePrice = 300000;
    if (money < winePrice) {
      console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
      const remainingMoney = money - winePrice;
      console.log(`Anda bisa pesan minuman. Sisa uang anda: ${remainingMoney}`);
    }
  }
}
