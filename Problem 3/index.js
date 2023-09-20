var nama="Ainun Dea";
var nilai=100;

function hitungDeskripsiNilai(nama, nilai) {

      if (nilai >= 80 && nilai <= 100) {
        deskripsi = "A";
      } else if (nilai >= 65 && nilai <= 79) {
        deskripsi = "B";
      } else if (nilai >= 50 && nilai <= 64) {
        deskripsi = "C";
      } else if (nilai >= 35 && nilai <= 49) {
        deskripsi = "D";
      } else if (nilai >= 0 && nilai <= 34) {
        deskripsi = "E";
      } else {
        console.log("Nilai Invalid");
      }

  }
  hitungDeskripsiNilai(nama, nilai);
  console.log(`Nama Siswa: ${nama}`);
  console.log(`Nilai Anda Adalah: ${nilai}`);
  console.log(`Deskripsi Nilai Anda: ${deskripsi}`);