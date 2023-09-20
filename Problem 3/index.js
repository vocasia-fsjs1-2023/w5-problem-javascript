var nama = "Incun"
var nilai= 90;
if (nilai >= 0 && nilai <= 100) {
  let desc;
  if (nilai >= 80 && nilai <= 100) {
    desc = "A";
  } else if (nilai >= 65 && nilai < 80) {
    desc = "B";
  } else if (nilai >= 50 && nilai < 65) {
    desc = "C";
  } else if (nilai >= 35 && nilai < 50) {
    desc = "D";
  } else {
    desc = "E";
  }

  console.log(`Nama: ${nama}`);
  console.log(`Nilai: ${nilai}`);
  console.log(`Deskripsi Nilai: ${desc}`);
} else {
  console.log("Nilai Invalid");
}
