var nama = "Bimo Cahyo Kusumo";
var nilai = 85;
var grade = "";

if (nilai >= 80 && nilai <= 100) {
  grade = "A";
} else if (nilai >= 65 && nilai <= 79) {
  grade = "B";
} else if (nilai >= 50 && nilai <= 64) {
  grade = "C";
} else if (nilai >= 35 && nilai <= 49) {
  grade = "D";
} else if (nilai >= 0 && nilai <= 34) {
  grade = "E";
} else if (nilai < 0 || nilai > 100) {
  grade = "Nilai Invalid";
}

console.log("Nama : " + nama);
console.log("Nilai: " + nilai);
console.log("Grade: " + grade);
