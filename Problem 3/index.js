var nama = "rico";
var nilai = 80;

if (nilai >= 80 && nilai <= 100) {
  console.log("Siswa " + nama + " mendapatkan nilai A");
} else if (nilai >= 65 && nilai <= 79) {
  console.log("Siswa " + nama + " mendapatkan nilai B");
} else if (nilai >= 50 && nilai <= 64) {
  console.log("Siswa " + nama + " mendapatkan nilai C");
} else if (nilai >= 35 && nilai <= 49) {
  console.log("Siswa " + nama + " mendapatkan nilai D");
} else if (nilai >= 0 && nilai <= 34) {
  console.log("Siswa " + nama + " mendapatkan nilai E");
} else {
  console.log("Nilai invalid");
}
